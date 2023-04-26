import { Link } from "react-router-dom";

interface ProfileHeaderProps {
  full_name: string;
  title: string;
  avatar: string;
}

const ProfileHeader = ({ full_name, title, avatar }: ProfileHeaderProps) => {
  
  return (
    <>
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {avatar ? (
            <div className="bg-gray-100 rounded flex items-center justify-center overflow-hidden w-20 h-20 border border-gray-200">
              <img src={avatar} alt="Avatar" className="object-contain" />
            </div>
          ) : (
            <div className="bg-gray-100 rounded w-20 h-20 flex items-center justify-center" />
          )}
          <div>
            <h1 className="text-2xl font-semibold">{full_name}</h1>
            <p className="text-gray-500">{title}</p>
          </div>
        </div>
        <div>
          <Link
            to="edit-profile"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Edit Profile
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProfileHeader;
