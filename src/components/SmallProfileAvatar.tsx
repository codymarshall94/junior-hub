import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../supabase/supabaseClient";

interface SmallProfileAvatarProps {
  url: string;
  userId: string;
}

const SmallProfileAvatar = ({ url, userId }: SmallProfileAvatarProps) => {
  const [avatarUrl, setAvatarUrl] = useState<string | null>("");

  useEffect(() => {
    if (url) downloadImage(url);
  }, [url]);

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

  if (!avatarUrl)
    return (
      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden"></div>
    );

  return (
    <div className="flex items-center space-x-2">
      <Link
        to={`/profile/${userId}`}
        className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden"
      >
        <img
          src={avatarUrl}
          alt="member"
          className="w-full h-full object-fit"
        />
      </Link>
    </div>
  );
};

export default SmallProfileAvatar;
