const status = [
  {
    id: 1,
    name: "Not Started",
  },
  {
    id: 2,
    name: "Planning",
  },
  {
    id: 3,
    name: "Completed",
  },
];

const ProjectStatus = () => {
  return (
    <div className="flex flex-col space-x-2 bg-[#CEECF6] rounded-md py-2 pl-2 pr-4 w-1/8">
      <label htmlFor="status" className="text-sm font-bold">PROJECT STAGE</label>
      <select name="status" id="status" className="text-sm bg-[#CEECF6] w-full">
        {status.map((status) => (
          <option key={status.id} value={status.id} className="text-sm font-semibold">
            {status.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProjectStatus;
