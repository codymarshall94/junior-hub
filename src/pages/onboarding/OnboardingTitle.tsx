interface TitleProps {
  handleChange: any;
  title: string;
}

const OnboardingTitle = ({ handleChange, title }: TitleProps) => {
  return (
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <input
        type="text"
        id="title"
        name="title"
        value={title}
        onChange={(e) => handleChange(e)}
        className="appearance-none block w-full border-[#E0E6F6] text-[#A3ABBA] border border-2 border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      />
    </div>
  );
};

export default OnboardingTitle;
