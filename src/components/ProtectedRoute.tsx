import { Outlet, useNavigate } from "react-router-dom";

const ProtectedRoute = ({ user }: { user: any }) => {
    console.log(user);
  const navigate = useNavigate();
  if (!user) {
    navigate("/login");
  }

  return <Outlet />;
};

export default ProtectedRoute;
