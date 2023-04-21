import { Outlet } from "react-router-dom";
import Profile from "../pages/profile/Profile";

const ProfileLayout = () => {
  return (
    <div className="flex flex-col space-y-4 w-full p-4">
      <Profile />
      <Outlet />
    </div>
  );
};

export default ProfileLayout;
