import { Link } from "react-router-dom";
import RegisterForm from "./RegisterForm";

const Register = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <span className="text-[#3C65F5]">Register</span>
      <h1 className="font-bold text-2xl">Start for free Today</h1>
      <RegisterForm />
      <span className="text-[#A3ABBA] mt-4">
        Already have an account?{" "}
        <Link to="/login" className="text-[#3C65F5]">
          Login
        </Link>
      </span>
    </div>
  );
};

export default Register;
