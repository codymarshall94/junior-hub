import LoginForm from "./LoginForm";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
    <span >Welcome back!</span>
    <h1 className="font-bold text-3xl">Member Login</h1>
    <LoginForm />
    <span className="text-[#A3ABBA] mt-4">
      Don't have an account?{" "}
      <Link to="/register" className="text-[#3C65F5]">
        Register
      </Link>
    </span>
  </div>
  );
};

export default Login;
