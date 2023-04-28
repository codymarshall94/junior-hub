import { Outlet } from "react-router-dom";
import Sidebar from "../pages/global/Sidebar";

const RootLayout = ({profile}: any) => {
  return (
    <div className="flex">
      <Sidebar profile={profile} />
      <Outlet />
    </div>
  );
};

export default RootLayout;
