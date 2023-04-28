import { useEffect, useState } from "react";
import { supabase } from "../supabase/supabaseClient";

const SmallProfileAvatar = ({ url }: { url: string }) => {
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
      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
        <img
          src={avatarUrl}
          alt="member"
          className="w-full h-full object-fit"
        />
      </div>
    </div>
  );
};

export default SmallProfileAvatar;
