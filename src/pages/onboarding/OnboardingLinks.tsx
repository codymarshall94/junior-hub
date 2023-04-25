type LinksProps = {
  handleChange: any;
    personalwebsite: string;
    github: string;
    linkedin: string;
};

const OnboardingLinks = ({
  handleChange,
  personalwebsite,
  github,
  linkedin,
}: LinksProps) => {
  return (
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label
        className="block uppercase tracking-wide text-[#A3ABBA] text-xs font-bold my-2"
        htmlFor="personalwebsite"
      >
        Portfolio
      </label>
      <input
        type="url"
        id="personalwebsite"
        name="personalwebsite"
        value={personalwebsite}
        onChange={(e) => handleChange(e)}
        className="appearance-none block w-full border-[#E0E6F6] text-[#A3ABBA] border border-2 border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      />
      <label
        className="block uppercase tracking-wide text-[#A3ABBA] text-xs font-bold my-2"
        htmlFor="github"
      >
        Github
      </label>
      <input
        type="url"
        id="github"
        name="github"
        value={github}
        onChange={(e) => handleChange(e)}
        className="appearance-none block w-full border-[#E0E6F6] text-[#A3ABBA] border border-2 border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      />
      <label
        className="block uppercase tracking-wide text-[#A3ABBA] text-xs font-bold my-2"
        htmlFor="linkedin"
      >
        LinkedIn
      </label>
      <input
        type="url"
        id="linkedin"
        name="linkedin"
        value={linkedin}
        onChange={(e) => handleChange(e)}
        className="appearance-none block w-full border-[#E0E6F6] text-[#A3ABBA] border border-2 border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      />
    </div>
  );
};

export default OnboardingLinks;
