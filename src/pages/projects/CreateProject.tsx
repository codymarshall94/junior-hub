import { useState } from "react";
import { supabase } from "../../supabase/supabaseClient";
import { useNavigate } from "react-router-dom";

interface ProjectListing {
  created_by: number;
  name: string;
  description: string;
  created_at: string;
  status: string;
  team_count: number;
  members: string[];
  stack: string[];
}

const techStackOptions = [
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "GraphQL",
  "TypeScript",
  "JavaScript",
  "Tailwind",
  "React Native",
  "C++",
];

const CreateProject = ({ id }: { id: number }) => {
  const navigate = useNavigate();
  const [projectListing, setProjectListing] = useState<ProjectListing>({
    created_by: id,
    name: "",
    description: "",
    created_at: "",
    status: "",
    team_count: 1,
    members: [],
    stack: [],
  });

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;
    if (checked) {
      setProjectListing({
        ...projectListing,
        stack: [...projectListing.stack, id],
      });
    } else {
      setProjectListing({
        ...projectListing,
        stack: projectListing.stack.filter((item) => item !== id),
      });
    }
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setProjectListing({ ...projectListing, status: e.target.value });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProjectListing({ ...projectListing, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (projectListing.stack.length === 0) {
      alert("Please select at least one technology stack");
      return;
    }

    const projectSubmission = {
      ...projectListing,
      created_at: new Date(),
    };

    const isEmpty = Object.values(projectSubmission).some(
      (x) => x === null || x === ""
    );

    if (isEmpty) {
      console.log(isEmpty);
      alert("Please fill out all fields");
      return;
    }

    const { data, error } = await supabase
      .from("projects")
      .insert([projectSubmission]);
    if (error) {
      console.log(error);
    } else {
      setProjectListing({
        created_by: id,
        name: "",
        description: "",
        created_at: "",
        status: "",
        team_count: 0,
        members: [],
        stack: [],
      });
      navigate("/projects");
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <h1 className="text-xl font-bold my-6">Create Project</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <div className="flex flex-wrap mx-3 mb-6">
          {/* Name */}
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-[#A3ABBA] text-xs font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="appearance-none block w-full border-[#E0E6F6] text-[#A3ABBA] border border-2 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              value={projectListing.name}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          {/* Status */}
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-[#A3ABBA] text-xs font-bold mb-2"
              htmlFor="status"
            >
              Status
            </label>
            <select
              className="appearance-none block w-full border-[#E0E6F6] text-[#A3ABBA] border border-2 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="status"
              onChange={(e) => handleStatusChange(e)}
              required
            >
              <option value="active">Planning</option>
              <option value="inactive">Early Development</option>
              <option value="inactive">In Development</option>
              <option value="inactive">In Review</option>
            </select>
          </div>
          {/* Description */}
          <div className="w-full px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-[#A3ABBA] text-xs font-bold my-2"
              htmlFor="description"
            >
              Description
            </label>
            <input
              type="text area"
              id="description"
              className="appearance-none block w-full border-[#E0E6F6] text-[#A3ABBA] border border-2 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              value={projectListing.description}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>

          {/* Team Count */}
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-[#A3ABBA] text-xs font-bold my-2"
              htmlFor="team_count"
            >
              Team Count
            </label>
            <input
              type="number"
              id="team_count"
              className="appearance-none block w-full border-[#E0E6F6] text-[#A3ABBA] border border-2 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              value={projectListing.team_count}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          {/* Stack */}
          <div className="w-full px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-[#A3ABBA] text-xs font-bold my-2"
              htmlFor="stack"
            >
              Stack
            </label>
            <span className="text-xs text-gray-500">
              Select up to 5 technologies
            </span>
            <div className="grid grid-cols-3 gap-2 my-4">
              {techStackOptions.map((tech) => (
                <div
                  key={tech}
                  className="flex items-center w-full p-3 border-[#E0E6F6] text-[#A3ABBA] border border-2 rounded-t-lg"
                >
                  <input
                    type="checkbox"
                    id={tech}
                    value={tech}
                    onChange={handleCheckboxChange}
                    className="form-checkbox h-5 w-5 text-blue-600 mr-2"
                    disabled={
                      projectListing.stack.length >= 5 &&
                      !projectListing.stack.includes(tech)
                    }
                  />
                  <label htmlFor={tech}>{tech}</label>
                </div>
              ))}
            </div>
          </div>
          <button type="submit" className="bg-blue-500 text-white p-4 w-full">
            Create Project
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateProject;
