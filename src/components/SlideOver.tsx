import Pill from "./Pill";

const ProjectMembers = ({ member }: any) => (
  <div className="flex items-center space-x-2">
    <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
      {member.charAt(0).toUpperCase()}
    </div>
  </div>
);

const SlideOver = ({ project, show, hide }: any) => {
  const { name, description, createdAt, members, stack, status } = project;

  if (project.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center absolute right-0 top-0 overflow-hidden p-4 z-50 bg-white h-screen w-1/4 shadow">
        <h1>Select A Project To Get Started</h1>
      </div>
    );
  }

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
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
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
          <span className="text-xs">{createdAt}</span>
        </div>

        {/*Group Status */}
        <div className="my-2">
          <span className="font-bold">Group Members</span>

          <div className="flex items-center space-x-2">
            {members.map((member: any) => (
              <ProjectMembers key={member} member={member} />
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
        <button className="bg-blue-500 text-white p-4 w-full">
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
