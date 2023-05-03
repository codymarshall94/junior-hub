import { Link } from "react-router-dom";
import LandingImg from "../../assets/images/landing.jpg";
import Logo from "../../assets/logo/devcollab-low-resolution-logo-color-on-transparent-background.png";

const Landing = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="absolute top-0 left-0 w-40 h-40 ml-4 mt-4">
        <img src={Logo} alt="Logo" className="" />
      </div>
      <div className="flex flex-col">
        <div className="border-t-2 w-1/4 mb-10"></div>
        <h1 className="text-6xl font-bold mb-10">Collaboration made easy</h1>
        <p className="text-2xl mb-10 w-1/2">
          Your dream projects are just a few clicks away. Register now to get
          started and become collaboraDEV!
        </p>
        <div className="flex items-center">
          <Link
            to="register"
            className="text-center bg-[#00DFC0] hover:bg-black text-white font-bold py-2 px-4 rounded mr-4 w-40"
          >
            Register
          </Link>
          <Link
            to="login"
            className="text-center text-black font-bold py-2 px-4 rounded border border-black hover:border-transparent hover:bg-black hover:text-white w-40"
          >
            Login
          </Link>
        </div>
      </div>
      <div className="w-1/4 h-1/4 bg-blue-500 rounded-full mb-10">
        <img src={LandingImg} alt="Landing" />
      </div>
    </div>
  );
};

export default Landing;
