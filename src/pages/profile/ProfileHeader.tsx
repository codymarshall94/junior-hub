import { Link } from "react-router-dom";

const ProfileHeader = ({ name }: { name: string }) => {
  return (
    <>
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="bg-gray-200 rounded h-14 w-14"></div>
          <div>
            <h1 className="text-2xl font-semibold">{name}</h1>
            <p className="text-gray-500">UI/UX Designer</p>
          </div>
        </div>
        <div>
          <Link
            to="edit-profile"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Edit Profile
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-gray-500 text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            <span>San Francisco, CA</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileHeader;
