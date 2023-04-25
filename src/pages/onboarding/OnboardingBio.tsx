type BioProps = {
  handleChange: any;
  bio: string;
};

const OnboardingBio = ({ handleChange, bio }: BioProps) => {
  return (
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <textarea
        id="bio"
        name="bio"
        value={bio}
        onChange={(e) => handleChange(e)}
        className="appearance-none block w-full border-[#E0E6F6] text-[#A3ABBA] border border-2 border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      />
    </div>
  );
};

export default OnboardingBio;
