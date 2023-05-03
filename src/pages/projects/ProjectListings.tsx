import { useEffect, useState } from "react";
import SlideOver from "../../components/SlideOver";
import { Link } from "react-router-dom";
import { supabase } from "../../supabase/supabaseClient";
import ProjectsToolbar from "./ProjectsToolbar";
import ProjectsGrid from "./ProjectsGrid";
import { createNotification } from "../../supabase/supabaseUtils";
import ProjectListing from "../../types/project";

const ProjectListings = ({ id }: { id: number }) => {
  const [projects, setProjects] = useState<ProjectListing[]>([]);
  const [sortedProjects, setSortedProjects] = useState<ProjectListing[]>([]);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [showSlideOver, setShowSlideOver] = useState(false);
  const [loading, setLoading] = useState(true);
  const [profileName, setProfileName] = useState("");
  const [memberAvatars, setMemberAvatars] = useState<string[]>([]);
  const [gridAllignment, setGridAllignment] = useState<"single" | "columns">(
    "columns"
  );

  useEffect(() => {
    getProjects();
  }, []);

  useEffect(() => {
    const getProfileName = async () => {
      const { data, error } = await supabase
        .from("profiles")
        .select("full_name")
        .eq("id", id);
      if (error) {
        console.log(error);
      }
      if (!data) return console.log("No data");
      setProfileName(data[0].full_name);
    };
    getProfileName();
  }, []);

  useEffect(() => {
    const getMemberAvatars = async () => {
      const { data, error } = await supabase
        .from("profiles")
        .select("avatar_url")
        .in("id", selectedProject?.members);
      if (error) {
        console.log(error);
      }
      if (!data) return console.log("No data");
      const urls = data.map((member: any) => member.avatar_url);
      setMemberAvatars(urls);
    };
    if (selectedProject) {
      getMemberAvatars();
    }
  }, [selectedProject]);

  const getProjects = async () => {
    const { data, error } = await supabase.from("projects").select("*");
    if (error) {
      console.log(error);
    }
    setProjects(data as any);
    setSortedProjects(data as any);
    setLoading(false);
  };

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setShowSlideOver(true);
  };

  const handleSlideOver = () => {
    setShowSlideOver(!showSlideOver);
  };

  const sendNotification = async () => {
    const notificationObj = {
      project_id: selectedProject?.id,
      sender_id: id,
      reciever_id: selectedProject?.created_by,
      status: "unread",
      type: "request_to_join",
      message: `${profileName} would like to join your project.`,
    };

    await createNotification(notificationObj);
    setShowSlideOver(false);
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
      <SlideOver
        project={selectedProject}
        show={showSlideOver}
        hide={handleSlideOver}
        sendNotification={sendNotification}
        memberAvatars={memberAvatars}
      />
    </div>
  );
};
export default ProjectListings;
