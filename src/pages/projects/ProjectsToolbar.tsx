type LengthProps = {
  length: number;
};

const ProjectsToolbar = ({ length }: LengthProps) => {
    console.log(length);
  return (
    <div className="flex items-center justify-between w-full pl-4 pb-2">
      <span>
        Showing <strong>{length}</strong> of <strong>{length}</strong> projects
      </span>
    </div>
  );
};

// Path: src\pages\projects\ProjectsToolbar.tsx
export default ProjectsToolbar;
