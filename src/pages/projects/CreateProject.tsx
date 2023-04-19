import { useState } from "react";

interface ProjectListing {
  name: string;
  description: string;
  createdAt: string;
  status: string;
  teamCount: number;
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

const CreateProject = () => {
  const [projectListing, setProjectListing] = useState<ProjectListing>({
    name: "",
    description: "",
    createdAt: "",
    status: "",
    teamCount: 0,
    members: [],
    stack: [],
  });

  const handleCheckboxChange = (e: any) => {
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

  const handleChange = (e: any) => {
    setProjectListing({ ...projectListing, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(projectListing);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <h1 className="text-xl font-bold my-6">Create Project</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <div className="flex flex-wrap mx-3 mb-6">
          {/* Name */}
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              value={projectListing.name}
              onChange={(e) => handleChange(e)}
            />
          </div>
          {/* Status */}
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="status"
            >
              Status
            </label>
            <select
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="status"
              onChange={(e) => handleChange(e)}
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
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold my-2"
              htmlFor="description"
            >
              Description
            </label>
            <input
              type="text area"
              id="description"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              value={projectListing.description}
              onChange={(e) => handleChange(e)}
            />
          </div>

          {/* Team Count */}
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold my-2"
              htmlFor="teamCount"
            >
              Team Count
            </label>
            <input
              type="number"
              id="teamCount"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              value={projectListing.teamCount}
              onChange={(e) => handleChange(e)}
            />
          </div>
          {/* Stack */}
          <div className="w-full px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold my-2"
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
                  className="flex items-center w-full border p-3 border-gray-200 rounded-t-lg dark:border-gray-600"
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
