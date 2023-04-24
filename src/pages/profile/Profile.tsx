import ProfileButtons from "./ProfileButtons";
import ProfileHeader from "./ProfileHeader";
import ProfilePill from "./ProfilePill";
import ProfileRating from "./ProfileRating";

interface User {
  email: string;
  fullname: string;
  ["user_metadata"]: {
    fullname: string;
    email: string;
  };
}

const Profile = ({ user }: { user: User }) => {
  if (!user) return <div>Loading...</div>;
  const { fullname } = user["user_metadata"];

  return (
    <div className="flex flex-col space-y-4 w-full p-4">
      <ProfileHeader name={fullname} />
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
