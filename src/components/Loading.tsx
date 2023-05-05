import LogoIcon from "../assets/logo/devcollab-website-favicon-color (1).png";

const Loading = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900">
        <img src={LogoIcon} alt="DevCollab Logo" />
      </div>
      <span className="text-2xl font-bold mt-4">Loading...</span>
    </div>
  );
};
export default Loading;
