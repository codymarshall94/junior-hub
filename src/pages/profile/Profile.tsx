import { useState, useEffect } from "react";
import { supabase } from "../../supabase/supabaseClient";
import ProfileButtons from "./ProfileButtons";
import ProfileHeader from "./ProfileHeader";
import ProfileRating from "./ProfileRating";
import ProfileBio from "./ProfileBio";
import ProfileSkills from "./ProfileSkills";
import ProfileExperience from "./ProfileExperience";
import RatingTag from "./RatingTag";

const Profile = ({ session }: { session: any }) => {
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [avatarUrl, setAvatarUrl] = useState<string>("");
  const [currentTab, setCurrentTab] = useState<Number | null>(0);
  //Rating for testing purposes
  const [rating, setRating] = useState({
    rating: 4.5,
    ratingCount: 10,
  })

  useEffect(() => {
    const getProfile = async () => {
      setLoading(true);
      const { user } = session;
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();
      if (error) {
        console.warn(error);
      } else if (data) {
        setProfile(data);
      }
      setLoading(false);
    };
    getProfile();
  }, [session]);

  useEffect(() => {
    if (profile) downloadImage(profile.avatar_url);
  }, [profile]);

  async function downloadImage(path: string) {
    try {
      const { data, error } = await supabase.storage
        .from("avatars")
        .download(path);
      if (error) {
        throw error;
      }
      const url = URL.createObjectURL(data);
      setAvatarUrl(url);
    } catch (error) {
      console.log("Error downloading image: ", error);
    }
  }

  const handleChangeTab = (index: Number) => {
    setCurrentTab(index);
  };

  const tabs = [
    {
      name: "bio",
      label: "Bio",
      element: (
        <ProfileBio
          bio={profile?.bio}
          website={profile?.website}
          linkedin={profile?.linkedin}
          github={profile?.github}
        />
      ),
    },
    { name: "skills", label: "Skills", element: <ProfileSkills /> },
    { name: "projects", label: "Projects", element: <ProfileExperience /> },
  ];

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col space-y-4 w-full p-4">
      <ProfileHeader
        full_name={profile.full_name}
        title={profile.title}
        avatar={avatarUrl}
      />
      <div className="flex flex-row space-x-4">
        <ProfileRating rating={rating.rating}/>
        <RatingTag rating={rating.rating} ratingCount={rating.ratingCount}/>
      </div>
      <ProfileButtons handleChangeTab={handleChangeTab} />
      <div className="border-t border-gray-200"></div>
      {tabs[currentTab as number].element}
    </div>
  );
};

export default Profile;
