import Pill from "./Pill";
import SmallProfileAvatar from "./SmallProfileAvatar";

const wordToUpperCase = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

const SlideOver = ({
  project,
  show,
  hide,
  sendNotification,
  memberAvatars,
}: any) => {
  if (!project) return <div className="hidden">loading..</div>;
  const { name, description, created_at, stack, status } = project;
  const readableDate = new Date(created_at).toDateString();
  return (
    <div
      className={`flex flex-col justify-center items-center absolute right-0 top-0 overflow-hidden z-50 bg-white h-screen w-1/4 shadow ${
        show ? "translate-x-0" : "translate-x-full transition-all duration-500 hidden"
      }`}
    >
      <div className="flex justify-end w-full p-2">
        <button
          onClick={hide}
          className="focus:outline-none bg-gray-100 p-2 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="flex flex-col h-full items-start w-full border-b px-4">
        {/* Project Header */}
        <div className="flex flex-col items-start w-full">
          <div className="flex items-center space-x-2">
            <h2 className="font-bold text-2xl mb-2">{wordToUpperCase(name)}</h2>
            <span className="text-sm text-gray-500">{status}</span>
          </div>
          {/* Date Created */}
          <div className="my-2 mb-4">
            <span className="text-gray-500 text-sm">Created</span>
            <br />
            <span className="font-bold">{readableDate}</span>
          </div>
        </div>
        {/* Description */}
        <div className="flex flex-col items-start w-full border-2 border-gray-200 rounded-md p-4 my-2">
          <span className="text-sm text-gray-500 mb-4">Description</span>
          <p className="font-bold">{description}</p>
        </div>
        {/* Members */}
        <div className="flex flex-col items-start w-full border-2 border-gray-200 rounded-md p-4 my-2">
          <span className="text-gray-500 text-sm mb-4">Members</span>
          <div className="flex items-center space-x-2">
            {memberAvatars.map((avatar: any) => (
              <SmallProfileAvatar url={avatar} key={avatar} />
            ))}
          </div>
        </div>

        {/* Stack */}
        <div className="flex flex-col items-start w-full border-2 border-gray-200 rounded-md p-4 my-2">
          <span className="text-gray-500 text-sm mb-4">Stack</span>
          <div className="flex items-center space-x-2">
            {stack.map((tech: any) => (
              <Pill pill={tech} key={tech} />
            ))}
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-center p-4 border-b w-full">
        <button
          onClick={() => sendNotification()}
          className="bg-blue-500 text-white p-4 rounded-md mr-2"
        >
          Request
        </button>
        <button className="bg-gray-200 text-gray-500 p-4 rounded-md">
          Message
        </button>
      </div>
    </div>
  );
};

export default SlideOver;
