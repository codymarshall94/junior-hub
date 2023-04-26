import { useState, useEffect } from "react";
import { supabase } from "../../supabase/supabaseClient";
import ProfileButtons from "./ProfileButtons";
import ProfileHeader from "./ProfileHeader";
import ProfilePill from "./ProfilePill";
import ProfileRating from "./ProfileRating";

const Profile = ({ session }: { session: any }) => {
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [avatarUrl, setAvatarUrl] = useState<string>("");

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

  if (loading) {
    return <div>Loading...</div>;
  }

    console.log("the profile is: ", profile);
  return (
    <div className="flex flex-col space-y-4 w-full p-4">
      <ProfileHeader full_name={profile.full_name} title={profile.title} avatar={avatarUrl} />
      <div className="flex flex-row space-x-4">
        <ProfileRating />
        <ProfilePill />
      </div>
      <ProfileButtons />
      <div className="border-t border-gray-200"></div>
    </div>
  );
};

export default Profile;
