import { Link } from "react-router-dom";

interface ProfileHeaderProps {
  fullname: string;
  title: string;
}

const ProfileHeader = ({ fullname, title }: ProfileHeaderProps) => {
  return (
    <>
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="bg-gray-200 rounded h-14 w-14"></div>
          <div>
            <h1 className="text-2xl font-semibold">{fullname}</h1>
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
