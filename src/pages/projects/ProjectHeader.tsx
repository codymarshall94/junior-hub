import SmallProfileAvatar from "../../components/SmallProfileAvatar";
import ProjectStatus from "./ProjectStatus";

interface ProjectHeaderProps {
  title: string;
  memberAvatars: string[];
  createdAt: Date;
}

const ProjectHeader = ({
  title,
  memberAvatars,
  createdAt,
}: ProjectHeaderProps) => {
  const readableDate = new Date(createdAt).toLocaleDateString();
  return (
    <div className="flex flex-col w-full my-4 border-y border-gray-200 py-4">
      <div className="flex items-center space-x-2">
        <h1 className="text-2xl font-semibold">{title.toUpperCase()}</h1>
        <ProjectStatus />
      </div>
      <div className="flex space-x-4 py-4">
        <div className="flex flex-col">
          <p className="font-bold">{readableDate}</p>
          <h2 className="text-sm text-gray-500">Start Date</h2>
        </div>
        <div className="flex flex-col">
          <p className="font-bold">Sprint 1</p>
          <h2 className="text-sm text-gray-500">Current Sprint</h2>
        </div>
      </div>
      <div className="flex flex-col space-x-2 py-4">
        <h2 className="text-sm text-gray-500">Members</h2>
        <div className="flex space-x-2 py-4">
          {memberAvatars.map((avatar: string, index: number) => (
            <SmallProfileAvatar key={index} url={avatar} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectHeader;
