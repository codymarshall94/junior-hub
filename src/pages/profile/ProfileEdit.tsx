import ProfileEditForm from "./ProfileEditForm";

interface User {
  email: string;
  fullname: string;
  ["user_metadata"]: {
    fullname: string;
    email: string;
  };
}

const ProfileEdit = ({ user }: { user: User }) => {
  return (
    <div className="p-4">
      <div>
        <h1 className="font-bold text-xl w-screen">My Acccount</h1>
        <p>Update your profile</p>
      </div>
      <div className="flex items-center mt-4">
        {/*Avatar*/}
        <div className="bg-gray-200 rounded h-14 w-14"></div>

        <button className="bg-blue-500 text-white ml-4 px-4 py-2 rounded-md">
          Upload Avatar
        </button>
      </div>
      <ProfileEditForm user={user} />
    </div>
  );
};

export default ProfileEdit;
