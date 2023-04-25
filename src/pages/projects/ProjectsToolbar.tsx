type LengthProps = {
  length: number;
};

const ProjectsToolbar = ({ length }: LengthProps) => {
  return (
    <div className="flex items-center justify-between w-full pl-4 pb-2">
      <span>
        Showing <strong>{length}</strong> of <strong>{length}</strong> projects
      </span>
    </div>
  );
};

export default ProjectsToolbar;
