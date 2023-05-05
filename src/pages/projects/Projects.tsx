import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../../supabase/supabaseClient";
import Project from "../../types/project";
import ProjectsToolbar from "./ProjectsToolbar";
import ProjectsGrid from "./ProjectsGrid";

const MyProjects = ({ id }: { id: string }) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [sortedProjects, setSortedProjects] = useState<Project[]>([]);
  const [gridAllignment, setGridAllignment] = useState<"single" | "columns">(
    "columns"
  );
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
    setSortedProjects(projectsData as any);
  };

  const handleProjectClick = (project: Project) => {
    navigate(`/projects/${project.id}`);
  };

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sortedProjects = [...projects];
    if (e.target.value === "newest") {
      sortedProjects.sort((a, b) => {
        return (
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );
      });
    } else if (e.target.value === "oldest") {
      sortedProjects.sort((a, b) => {
        return (
          new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
        );
      });
    }
    setSortedProjects(sortedProjects);
  };

  return (
    <div className="flex flex-col w-full items-center">
      <h1 className="text-2xl font-bold h-fit">My Projects</h1>

      <ProjectsToolbar
        length={projects.length}
        gridAllignment={gridAllignment}
        handleGridAllignment={setGridAllignment}
        handleSort={handleSort}
      />
      {loading ? (
        <div className="h-fit border-t-2 border-[#E0E6F7] w-full">
          <span>Fetching Projects...</span>
        </div>
      ) : (
        <ProjectsGrid
          gridAllignment={gridAllignment}
          projects={sortedProjects}
          onClick={handleProjectClick}
        />
      )}
    </div>
  );
};

export default MyProjects;
