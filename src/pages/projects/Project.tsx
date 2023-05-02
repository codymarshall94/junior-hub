import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../../supabase/supabaseClient";
import ProjectHeader from "./ProjectHeader";
import ProjectLinks from "./ProjectLinks";

const Project = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [memberAvatars, setMemberAvatars] = useState<string[]>([]);

  useEffect(() => {
    getProject();
  }, [id]);

  useEffect(() => {
    if (selectedProject) {
      getMemberAvatars();
    }
  }, [selectedProject]);

  const getProject = async () => {
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .eq("id", id);
    if (error) {
      console.log(error);
    }
    if (!data) return console.log("No data");
    setSelectedProject(data[0]);
    setLoading(false);
  };

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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4 w-screen">
      <h1 className="text-2xl font-semibold">Project Dashboard</h1>
      <ProjectHeader
        title={selectedProject?.name}
        memberAvatars={memberAvatars}
      />
      <ProjectLinks />
    </div>
  );
};

export default Project;
