import Pill from "./Pill";
import SmallProfileAvatar from "./SmallProfileAvatar";

const SlideOver = ({
  project,
  show,
  hide,
  sendNotification,
  memberAvatars,
}: any) => {
  if (!project) return <div className="hidden">loading..</div>;
  const { name, description, createdat, stack, status } = project;
  return (
    <div
      className={`flex flex-col justify-center items-center absolute right-0 top-0 overflow-hidden z-50 bg-white h-screen w-1/4 shadow ${
        show ? "translate-x-0" : "translate-x-full transition-all duration-500"
      }`}
    >
      <div className="flex justify-end w-full p-2">
        <button onClick={hide}>
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
        <div>
          <h2 className="font-bold text-xl mb-2">{name}</h2>
          <p className="text-sm text-gray-500">{description}</p>
          {status}
        </div>

        {/* Date Created */}
        <div className="my-2">
          <span className="font-bold">Group Created</span>
          <br />
          <span className="text-xs">{createdat}</span>
        </div>

        {/*Group Status */}
        <div className="my-2">
          <span className="font-bold">Group Members</span>
          <div className="flex items-center space-x-2">
            {memberAvatars.map((avatar : any) => (
              <SmallProfileAvatar url={avatar} key={avatar} />
            ))}
          </div>
        </div>

        {/* Stack */}
        <div className="my-2">
          <span className="font-bold">Stack</span>

          <div className="flex items-center space-x-2">
            {stack.map((tech: any) => (
              <Pill pill={tech} key={tech} />
            ))}
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between p-4 border-b">
        <button
          onClick={() => sendNotification()}
          className="bg-blue-500 text-white p-4 w-full"
        >
          Request
        </button>
        <button className="bg-gray-200 text-gray-500 p-4 w-full">
          Message
        </button>
      </div>
    </div>
  );
};

export default SlideOver;
