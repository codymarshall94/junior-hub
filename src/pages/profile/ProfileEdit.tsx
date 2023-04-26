import { useEffect, useState } from "react";
import { supabase } from "../../supabase/supabaseClient";
import ProfileEditForm from "./ProfileEditForm";

const ProfileEdit = ({ session }: any) => {
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

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

  return (
    <div className="p-4">
      <div>
        <h1 className="font-bold text-xl w-screen">My Acccount</h1>
        <p>Update your profile</p>
      </div>
      <ProfileEditForm profile={profile} loading={loading} />
    </div>
  );
};

export default ProfileEdit;
