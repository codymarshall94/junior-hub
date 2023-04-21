import { Outlet } from "react-router-dom";
import Sidebar from "../pages/global/Sidebar";

const RootLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
