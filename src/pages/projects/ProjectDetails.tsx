import Pill from "../../components/Pill";
import SmallProfileAvatar from "../../components/SmallProfileAvatar";
import ProjectListing from "../../types/project";
import Loading from "../../components/Loading";

interface ProjectDetailsProps {
  project: ProjectListing | null;
  sendNotification: () => void;
  memberAvatars: string[];
}

const wordToUpperCase = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

const ProjectDetails = ({
  project,
  sendNotification,
  memberAvatars,
}: ProjectDetailsProps) => {

  if (!project) return <Loading />;

  const { name, description, stack, status, created_at } = project;
  const readableDate = new Date(created_at).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex flex-col w-full border-b px-4">
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
              <SmallProfileAvatar url={avatar.avatar} key={avatar.id} userId={avatar.id} />
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
      <div className="flex justify-center p-4 w-full">
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

export default ProjectDetails;
