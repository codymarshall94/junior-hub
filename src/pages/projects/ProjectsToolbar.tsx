import ProjectsSort from "./ProjectSort";
import ProjectsOrientation from "./ProjectsOrientation";
import { Link } from "react-router-dom";

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
        <Link
          to="/projects/create-project"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded whitespace-nowrap mr-4"
        >
          Create Project
        </Link>
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
