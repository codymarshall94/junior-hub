import { Outlet } from "react-router-dom";
import Navbar from "../pages/global/Navbar";

const RootLayout = ({profile}: any) => {

  return (
    <div className="flex flex-col w-screen h-screen">
      <Navbar profile={profile} />
      <div className="flex flex-col w-1/2 h-full mx-auto">
      <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
