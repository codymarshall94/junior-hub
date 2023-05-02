import SmallProfileAvatar from "../../components/SmallProfileAvatar";

interface ProjectHeaderProps {
  title: string;
  memberAvatars: string[];
}

const ProjectHeader = ({ title, memberAvatars }: ProjectHeaderProps) => {

  return (
    <div className="flex flex-col w-full my-4 border-y border-gray-200 py-4">
      <div className="flex items-center space-x-2">
        <h1 className="text-2xl font-semibold">{title.toUpperCase()}</h1>
      </div>
      <div className="flex space-x-2 py-4">
        {memberAvatars.map((avatar: string, index: number) => (
          <SmallProfileAvatar key={index} url={avatar} />
        ))}
      </div>
    </div>
  );
};

export default ProjectHeader;
