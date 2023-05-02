import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../../supabase/supabaseClient";
import ProjectItem from "./ProjectItem";
import Project from "../../types/project";
import ProjectsToolbar from "./ProjectsToolbar";

const MyProjects = ({ id }: { id: string }) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

  useEffect(() => {
    getProjects();
    setLoading(false);
  }, []);

  const getProjects = async () => {
    const { data, error } = await supabase
      .from("project_members")
      .select("project_id")
      .eq("member_id", id);
    if (error) {
      console.log(error);
    }
    if (!data) return console.log("No data");
    const projectIds = data.map((project: any) => project.project_id);
    const { data: projectsData, error: projectsError } = await supabase
      .from("projects")
      .select("*")
      .in("id", projectIds);
    if (projectsError) {
      console.log(projectsError);
    }
    if (!projectsData) return console.log("No data");
    setProjects(projectsData as any);
  };

  const handleProjectClick = (project: Project) => {
    navigate(`/projects/${project.id}`);
    };

  return (
    <div className="flex flex-col w-screen items-center">
      <div className="flex items-center justify-between w-full p-4 h-40">
        <h1 className="text-2xl font-bold h-fit">My Projects</h1>
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
            <ProjectItem key={project["id"]} project={project} onClick={handleProjectClick} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyProjects;
