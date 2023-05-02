import Pill from "../../components/Pill";
import WatchIcon from "../../components/WatchIcon";
import Project from "../../types/project";

const ProjectItem = ({
  project,
  onClick,
}: {
  project: Project;
  onClick: any;
}) => {
  const { name, description, team_count, stack, created_at, members } = project;

  const readableDate = new Date(created_at).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="group ">
      <div
        className="min-h-full rounded-md bg-[#F8FAFF] group-hover:bg-white p-4 w-full flex flex-col justify-between border-[#E0E6F7] group-hover:border-[#CDD4F7] border-2 cursor-pointer h-fit translate-y-0 group-hover:translate-y-[-2px] transition-all duration-300 ease-in-out"
        onClick={() => onClick(project)}
      >
        <div className="flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">{name}</h2>
            <WatchIcon />
          </div>
          <div className="flex items-center space-x-2 py-3">
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                />
              </svg>
              <span className="text-sm text-gray-500">
                {members.length}/{team_count}
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <span className="text-sm text-gray-500">{readableDate}</span>
            </div>
          </div>
          <div className="py-4">
            <p className="text-sm">{description}</p>
          </div>
          <div className="flex space-x-2 mt-2">
            {stack.map((pill: string) => (
              <Pill key={pill} pill={pill} />
            ))}
          </div>
        </div>
        <div className="flex justify-end">
          <button
            id="project-view-btn"
            className="bg-[#E0E6F7] group-hover:bg-[#3C65F5] group-hover:text-white text-[#3C6DF5] p-4 w-1/4 mt-4 rounded-md w-36 transition-all duration-300 ease-in-out"
          >
            View Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
