import { useEffect, useState } from "react";
import { supabase } from "../../supabase/supabaseClient";
import { fetchUser } from "../../supabase/supabaseAuth";
import { useParams } from "react-router-dom";

interface AvatarProps {
  url: string;
  onUpload: (e: any, url: string) => void;
}

export default function Avatar({ url, onUpload }: AvatarProps) {
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const { currentpath } = useParams<{ currentpath: string }>();

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

  async function uploadAvatar(event: any) {
    const user = await fetchUser();
    try {
      setUploading(true);
      if (!event.target.files || event.target.files.length === 0) {
        throw new Error("You must select an image to upload.");
      }
      const file = event.target.files[0];
      const filePath = `${user?.id}/${file.name}`;
      console.log(filePath + "filePath");
      const { data, error } = await supabase.storage
        .from("avatars")
        .upload(filePath, file);
      if (error) {
        throw error;
      }
      console.log(data + "data");
      onUpload(event, filePath);
    } catch (error) {
      console.log(error);
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="flex items-center">
      {avatarUrl ? (
        <div className="bg-gray-100 rounded flex items-center justify-center overflow-hidden w-20 h-20 border border-gray-200">
          <img src={avatarUrl} alt="Avatar" className="object-contain" />
        </div>
      ) : (
        <div className="bg-gray-100 rounded w-20 h-20 flex items-center justify-center" />
      )}
      {currentpath !== "/profile" && (
        <div className="ml-4">
          <label
            htmlFor="avatar_url"
            className="hover:bg-blue-700 py-2 px-4 rounded cursor-pointer border hover:text-white border-blue-700 text-blue-700 transition duration-300 ease-in-out"
          >
            {uploading ? "Uploading ..." : "Upload Avatar"}
          </label>
          <input
            className="cursor-pointer hidden"
            type="file"
            id="avatar_url"
            name="avatar_url"
            accept="image/*"
            onChange={uploadAvatar}
            disabled={uploading}
          />
        </div>
      )}
    </div>
  );
}
