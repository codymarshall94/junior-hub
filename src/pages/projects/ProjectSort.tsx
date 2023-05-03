type SortProps = {
    handleSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const ProjectsSort = ({handleSelect}: SortProps) => {
  return (
    <div className="flex items-center justify-center w-full mr-2 py-1 px-2 border-[#E0E6F7] border-2 rounded">
      <label htmlFor="sort">Sort by:</label>
      <select name="sort" id="sort" className="ml-2 cursor-pointer" onChange={handleSelect}>
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
      </select>
    </div>
  );
};

export default ProjectsSort;
