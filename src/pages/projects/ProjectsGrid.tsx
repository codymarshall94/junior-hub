import ProjectListing from "../../types/project";
import ProjectItem from "./ProjectItem";

interface ProjectsGridProps {
  projects: ProjectListing[];
  gridAllignment: "single" | "columns";
  onClick: (project: ProjectListing) => void;
}

const ProjectsGrid = ({
  projects,
  gridAllignment,
  onClick: handleProjectClick,
}: ProjectsGridProps) => {
  return (
    <div className="w-full">
      {gridAllignment === "single" ? (
        <div className="grid grid-cols-1 gap-4 p-4 h-fit max-w-2xl mx-auto">
          {projects.map((project) => (
            <ProjectItem
              key={project["id"]}
              project={project}
              onClick={handleProjectClick}
            />
          ))}
        </div>
      ) : (
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 p-4">
          {projects.map((project) => (
            <ProjectItem
              key={project["id"]}
              project={project}
              onClick={handleProjectClick}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectsGrid;
