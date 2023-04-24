import { Outlet } from "react-router-dom";
import Profile from "../pages/profile/Profile";

interface User {
  email: string;
  fullname: string;
  ["user_metadata"]: {
    fullname: string;
    email: string;
  };
}

const ProfileLayout = ({user}: {user: User}) => {
  return (
    <div className="flex flex-col space-y-4 w-full p-4">
      <Profile user={user} />
      <Outlet />
    </div>
  );
};

export default ProfileLayout;
