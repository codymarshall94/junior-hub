const ProfileEditForm = () => {
  return (
    <form className="mt-4">
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          className="block uppercase tracking-wide text-[#A3ABBA] text-xs font-bold my-2"
          htmlFor="name"
        >
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          className="appearance-none block w-full border-[#E0E6F6] text-[#A3ABBA] border border-2 border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          required
        />
      </div>
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          className="block uppercase tracking-wide text-[#A3ABBA] text-xs font-bold my-2"
          htmlFor="email"
        >
          Email *
        </label>
        <input
          type="email"
          id="email"
          className="appearance-none block w-full border-[#E0E6F6] text-[#A3ABBA] border border-2 border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          required
        />
      </div>
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          className="block uppercase tracking-wide text-[#A3ABBA] text-xs font-bold my-2"
          htmlFor="bio"
        >
          Bio
        </label>
        <textarea
          id="bio"
          className="appearance-none block w-full border-[#E0E6F6] text-[#A3ABBA] border border-2 border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          required
        />
      </div>
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          className="block uppercase tracking-wide text-[#A3ABBA] text-xs font-bold my-2"
          htmlFor="personalwebsite"
        >
          Personal Website
        </label>
        <input
          type="url"
          id="personalwebsite"
          className="appearance-none block w-full border-[#E0E6F6] text-[#A3ABBA] border border-2 border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          required
        />
      </div>
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          className="block uppercase tracking-wide text-[#A3ABBA] text-xs font-bold my-2"
          htmlFor="github"
        >
          Github
        </label>
        <input
          type="url"
          id="github"
          className="appearance-none block w-full border-[#E0E6F6] text-[#A3ABBA] border border-2 border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          required
        />
      </div>
      <div className="border-t border-gray-200 mt-4 pt-4"></div>
      <div>
        <h2 className="text-[#F68A3C] font-bold">Change your password</h2>
        <div className="flex items-center mt-4">
          <div className="w-1/4 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-[#A3ABBA] text-xs font-bold my-2"
              htmlFor="password"
            >
              Password
            </label>

            <input
              type="password"
              id="password"
              className="appearance-none block w-full border-[#E0E6F6] text-[#A3ABBA] border border-2 border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              required
            />
          </div>
          <div className="w-1/4 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-[#A3ABBA] text-xs font-bold my-2"
              htmlFor="repassword"
            >
              Re-Password *
            </label>
            <input
              type="password"
              id="repassword"
              className="appearance-none block w-full border-[#E0E6F6] text-[#A3ABBA] border border-2 border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              required
            />
          </div>
        </div>
      </div>
      <button className="w-1/2 mt-2 bg-[#3C65F5] text-white px-4 py-2 rounded mt-4">
        Save All Changes
      </button>
    </form>
  );
};

export default ProfileEditForm;
