import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { supabase } from "../../supabase/supabaseClient";

interface RegisterInfo {
  name: string;
  email: string;
  password: string;
  repassword: string;
}

const RegisterForm = () => {
  const navigate = useNavigate();
  const [registerUser, setRegisterUser] = useState<RegisterInfo>({
    name: "",
    email: "",
    password: "",
    repassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterUser({
      ...registerUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (registerUser.password !== registerUser.repassword) {
      setError("Password does not match");
      return;
    }

    const registerCredentials = {
      email: registerUser.email,
      password: registerUser.password,
    };

    supabase.auth.signUp(registerCredentials).then((response) => {
      if (response.error) {
        setError(response.error.message);
        return;
      }
      navigate("/onboarding");
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
          value={registerUser.email}
          onChange={(e) => handleChange(e)}
          className="appearance-none block w-full border-[#E0E6F6] text-[#A3ABBA] border border-2 border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          required
        />
      </div>

      <div className="flex flex-col items-center mt-4">
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
            value={registerUser.password}
            onChange={(e) => handleChange(e)}
            className="appearance-none block w-full border-[#E0E6F6] text-[#A3ABBA] border border-2 border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            required
          />
        </div>
        <div className="w-full mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-[#A3ABBA] text-xs font-bold my-2"
            htmlFor="repassword"
          >
            Re-Password *
          </label>
          <input
            type="password"
            id="repassword"
            name="repassword"
            value={registerUser.repassword}
            onChange={(e) => handleChange(e)}
            className="appearance-none block w-full border-[#E0E6F6] text-[#A3ABBA] border border-2 border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            required
          />
        </div>
        {error && <div className="text-red-500">{error}</div>}
      </div>
      <button
        type="submit"
        className="w-full mt-2 bg-[#3C65F5] text-white px-4 py-2 rounded mt-4"
      >
        Submit & Register
      </button>
    </form>
  );
};

export default RegisterForm;
