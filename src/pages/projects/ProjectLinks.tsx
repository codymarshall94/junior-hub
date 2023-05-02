import { useState } from "react";

const linkTypes = [
  {
    name: "Repository",
  },
  {
    name: "Live Site",
  },
  {
    name: "Design",
  },
  {
    name: "Workflow",
  },
  {
    name: "Voice/Video",
  },
  {
    name: "Other",
  },
];

const ProjectLinks = () => {
  const [editing, setEditing] = useState(false);

  const handleEdit = () => {
    setEditing(!editing);
  };

  return (
    <div className="rounded-md bg-[#F8FAFF] group-hover:bg-white p-4 w-1/2 flex flex-col justify-between border-[#E0E6F7] group-hover:border-[#CDD4F7] border-2 cursor-pointer h-fit translate-y-0 group-hover:translate-y-[-2px] transition-all duration-300 ease-in-out">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Links</h3>
        <button onClick={handleEdit} className="focus:outline-none p-2">
          {!editing ? (
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
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          ) : (
            <span className="text-blue-500">Save Changes</span>
          )}
        </button>
      </div>
      <div className="flex flex-col space-y-2">
        {linkTypes.map((linkType) => (
          <div className="flex items-center space-x-2">
            <span className="w-1/4">{linkType.name}:</span>
            {editing ? (
              <input
                type="text"
                className="w-full"
                placeholder="This is where you will edit the link"
              />
            ) : (
              <a href="#" className="text-blue-500">
                This is where the link will go
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectLinks;
