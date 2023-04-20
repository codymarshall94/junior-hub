import ProfileButtons from "./ProfileButtons";
import ProfileHeader from "./ProfileHeader";
import ProfilePill from "./ProfilePill";
import ProfileRating from "./ProfileRating";

const Profile = () => {
  return (
    <div className="flex flex-col space-y-4 w-full p-4">
      <ProfileHeader />
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
