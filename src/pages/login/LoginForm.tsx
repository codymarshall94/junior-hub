import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../supabase/supabaseAuth";

interface UserLogin {
  email: string;
  password: string;
}

const LoginForm = () => {
  const [userLogin, setUserLogin] = useState<UserLogin>({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const loginCredentials = {
      email: userLogin.email,
      password: userLogin.password,
    };

    loginUser(loginCredentials).then((response) => {
      if (response.error) {
        setError(response.error.message);
        return;
      }
      console.log(response);
      navigate("/dashboard");
    });
  };

  return (
    <form className="mt-4" onSubmit={handleSubmit}>
      <div className="w-full mb-6 md:mb-0">
        <label
          className="block uppercase tracking-wide text-[#A3ABBA] text-xs font-bold my-2"
          htmlFor="email"
        >
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={userLogin.email}
          onChange={(e) => handleChange(e)}
          className="appearance-none block w-full border-[#E0E6F6] text-[#A3ABBA] border border-2 border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          required
        />
      </div>

      <div className="w-full mb-6 md:mb-0">
        <label
          className="block uppercase tracking-wide text-[#A3ABBA] text-xs font-bold my-2"
          htmlFor="password"
        >
          Password *
        </label>

        <input
          type="password"
          id="password"
          name="password"
          value={userLogin.password}
          onChange={(e) => handleChange(e)}
          className="appearance-none block w-full border-[#E0E6F6] text-[#A3ABBA] border border-2 border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          required
        />
      </div>
      <span className="text-[#F85149]">{error}</span>
      <button
        type="submit"
        className="w-full mt-2 bg-[#3C65F5] text-white px-4 py-2 rounded mt-4"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
