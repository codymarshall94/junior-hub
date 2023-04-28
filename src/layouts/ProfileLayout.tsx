import { Outlet } from "react-router-dom";

const ProfileLayout = () => {
  return (
    <div className="flex flex-col space-y-4 w-full p-4">
      <Outlet />
    </div>
  );
};

export default ProfileLayout;
