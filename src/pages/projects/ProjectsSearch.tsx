import SearchIllustration from "../../assets/images/search-image.png";

const ProjectsSearch = () => {
  return (
    <div className="bg-[#F2F6FD] rounded-lg py-8 w-full mb-8 relative">
      <div className="absolute bottom-0 left-0 w-1/8 h-full">
        <img
          src={SearchIllustration}
          alt="Search Illustration"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col items-center justify-between">
        <h1 className="text-3xl font-bold mb-2">Search Projects</h1>
        <p className="text-sm text-[#64748B] mb-8 w-1/2 text-center">
          Search for projects by name, description, or tags. If you dont see a
          project you are looking for, you can create one.
        </p>
        <div className="flex items-center space-x-2 mt-4 w-1/2">
          <input
            type="text"
            placeholder="Search"
            className="border-2 border-[#E0E6F7] rounded-lg p-2 w-full"
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSearch;
