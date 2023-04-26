import { useEffect, useState } from "react";
import ProjectItemPill from "../../components/Pill";
import SlideOver from "../../components/SlideOver";
import { Link } from "react-router-dom";
import { supabase } from "../../supabase/supabaseClient";
import ProjectsToolbar from "./ProjectsToolbar";

interface ProjectProps {
  id: number;
  name: string;
  description: string;
  createdat: string;
  teamcount: number;
  members: string[] | any;
  stack: string[] | any;
  status: string;
}

const WatchIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
};

const ProjectItem = ({
  project,
  onClick,
}: {
  project: ProjectProps;
  onClick: any;
}) => {
  const { name, description, teamcount, stack, createdat, members } = project;
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
                {members.length}/{teamcount}
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

              <span className="text-sm text-gray-500">{createdat}</span>
            </div>
          </div>
          <div className="py-4">
            <p className="text-sm">{description}</p>
          </div>
          <div className="flex space-x-2 mt-2">
            {stack.map((pill: string) => (
              <ProjectItemPill key={pill} pill={pill} />
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

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState([]);
  const [showSlideOver, setShowSlideOver] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = async () => {
    const { data, error } = await supabase.from("projects").select("*");
    if (error) {
      console.log(error);
    }
    setProjects(data as any);
    setLoading(false);
  };

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setShowSlideOver(true);
  };

  const handleSlideOver = () => {
    setShowSlideOver(!showSlideOver);
  };

  if (!projects)
    return (
      <div className="flex flex-col w-screen items-center">
        <div className="flex items-center justify-between w-full p-4 h-40">
          <h1 className="text-2xl font-bold h-fit">Project Listings</h1>
          <Link
            to="/projects/create-project"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Create Project
          </Link>
        </div>
        <div className="h-fit border-t-2 border-[#E0E6F7] w-full">
          <span>No Projects Found</span>
        </div>
      </div>
    );

  return (
    <div className="flex flex-col w-screen items-center">
      <div className="flex items-center justify-between w-full p-4 h-40">
        <h1 className="text-2xl font-bold h-fit">Project Listings</h1>
        <Link
          to="/projects/create-project"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Create Project
        </Link>
      </div>
      <ProjectsToolbar length={projects.length} />
      {loading ? (
        <div className="h-fit border-t-2 border-[#E0E6F7] w-full">
          <span>Fetching Projects...</span>
        </div>
      ) : (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 p-4 h-fit border-t-2 border-[#E0E6F7] w-full">
          {projects.map((project) => (
            <ProjectItem
              key={project["id"]}
              project={project}
              onClick={handleProjectClick}
            />
          ))}
        </div>
      )}
      <SlideOver
        project={selectedProject}
        show={showSlideOver}
        hide={handleSlideOver}
      />
    </div>
  );
};
export default Projects;
