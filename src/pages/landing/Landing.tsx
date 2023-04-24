import  { Link }  from  "react-router-dom" ;

const Landing = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <h1 className="font-bold text-2xl">Junior Hub</h1>
      <div className="flex items-center justify-center">
        <Link to="register" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Register
        </Link>
        <Link to="login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Landing;
