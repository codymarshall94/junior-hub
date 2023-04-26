import { useEffect, useState } from "react";
import { supabase } from "../../supabase/supabaseClient";

const ProfileBio = ({ session }: { session: any }) => {
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

  const links = [
    {
      name: "Personal Website",
      link: profile?.website || "",
    },
    {
      name: "LinkedIn",
      link: profile?.linkedin || "",
    },
    {
      name: "GitHub",
      link: profile?.github || "",
    },
  ];

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <h1 className="font-bold text-xl mb-4">Profile Bio</h1>
      <div className="flex flex-row space-x-4">
        <div className="w-3/4">
          <h1 className="font-semibold text-lg mb-2">About Me</h1>
          <p className="text-gray-500 w-full">
            {profile.bio || "This user has not added a bio yet."}
          </p>
        </div>
        <div className="border-l border-gray-200 pl-4 w-1/4">
          <h1 className="font-semibold text-lg mb-2">Links</h1>
          <ul className="space-y-2">
            {links.map((link) => (
              <>
                {link.link !== "" && (
                  <li key={link.name}>
                    <a
                      href={link.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      {link.name}
                    </a>
                  </li>
                )}
              </>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileBio;
