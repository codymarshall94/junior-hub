import ProjectsSort from "./ProjectSort";
import ProjectsOrientation from "./ProjectsOrientation";

type LengthProps = {
  length: number;
};

type OrientationProps = {
  gridAllignment: "single" | "columns";
  handleGridAllignment: (allignment: "single" | "columns") => void;
};

type SortProps = {
  handleSort: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const ProjectsToolbar = ({
  length,
  gridAllignment,
  handleGridAllignment,
  handleSort,
}: LengthProps & OrientationProps & SortProps) => {
  return (
    <div className="flex items-center justify-between w-full pl-4 pb-2 border-b-2 border-[#E0E6F7]">
      <span>
        Showing <strong>{length}</strong> of <strong>{length}</strong> projects
      </span>
      <div className="flex items-center">
        <ProjectsSort handleSelect={handleSort} />
        <ProjectsOrientation
          gridAllignment={gridAllignment}
          handleGridAllignment={handleGridAllignment}
        />
      </div>
    </div>
  );
};

export default ProjectsToolbar;
