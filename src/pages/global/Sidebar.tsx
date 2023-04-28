import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../../supabase/supabaseAuth";
import SmallProfileAvatar from "../../components/SmallProfileAvatar";

const topLinks = [
  {
    name: "Notifications",
    svg: (
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
          d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
        />
      </svg>
    ),
    link: "/notifications",
  },
  {
    name: "Messages",
    svg: (
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
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    ),
    link: "/messages",
  },
];

const links = [
  {
    name: "Dashboard",
    svg: (
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
          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    ),
    link: "/dashboard",
  },
  {
    name: "Teams",
    svg: (
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
          d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
        />
      </svg>
    ),
    link: "/teams",
  },
];

const projectLinks = [
  {
    name: "My Projects",
    link: "/my-projects",
  },
  {
    name: "Find a Project",
    link: "/projects",
  },
  {
    name: "Create Project",
    link: "/projects/create-project",
  },
];

const bottomLinks = [
  {
    name: "Settings",
    svg: (
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
          d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    link: "/settings",
  },
];

const ProjectsDropdown = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      <button
        className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-left text-gray-700 bg-white rounded-lg hover:bg-[#F8FAFF] focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
        onClick={() => setShow(!show)}
      >
        <span className="text-gray-900 text-lg font-semibold">Projects</span>
        <svg
          className="w-5 h-5 ml-2 -mr-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          {show ? (
            <>
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
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </>
          ) : (
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
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          )}
        </svg>
      </button>
      {show && (
        <>
          {projectLinks.map((link) => (
            <Link
              key={link.name}
              to={link.link}
              className="group flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-left bg-white rounded-lg hover:bg-[#F8FAFF] focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
            >
              <span className="text-[#969696] group-hover:text-[#969696] pl-4">
                {link.name}
              </span>
            </Link>
          ))}
        </>
      )}
    </div>
  );
};

export default function Sidebar({ profile }: { profile: any }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex">
      <div className="flex flex-col h-screen p-3 bg-white shadow w-60">
        {/* Logo */}
        <div className="my-4">
          <div className="flex items-center">
            <h2 className="text-2xl font-bold">Junior Hub</h2>
          </div>
        </div>
        {/* Profile */}
        <div className="flex items-center space-x-2 my-4">
          <SmallProfileAvatar url={profile?.avatar_url} />
          <div className="flex flex-col">
            <span className="font-bold">{profile?.full_name}</span>
            <Link className="text-sm text-[#AFAFAF]" to="/profile">
              view profile
            </Link>
          </div>
        </div>
        {/*Top Links */}
        <div className="flex flex-col mb-4">
          {topLinks.map((link) => (
            <Link
              key={link.name}
              to={link.link}
              className="flex items-center pl-2 py-1 text-[#969696] text-xs space-x-2 rounded-md hover:bg-[#F8FAFF]"
            >
              {link.svg}
              <span>{link.name}</span>
            </Link>
          ))}
        </div>
        <div className="border-t border-gray-200"></div>
        {/* Middle Links */}
        <div className="flex-1">
          <ul className="pt-2 pb-4 space-y-1 text-sm">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.link}
                  className="flex items-center p-2 space-x-2 rounded-md hover:bg-[#F8FAFF]"
                >
                  {link.svg}
                  <span>{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
          <ProjectsDropdown />
        </div>

        {/* Bottom Links */}
        <div className="flex flex-col">
          {bottomLinks.map((link) => (
            <Link
              key={link.name}
              to={link.link}
              className="flex items-center px-2 py-4 space-x-2 rounded-md hover:bg-[#F8FAFF]"
            >
              {link.svg}
              <span>{link.name}</span>
            </Link>
          ))}
          <div className="flex items-center pl-2">
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
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
              />
            </svg>
            <button onClick={() => handleLogout()} className="pl-2">
              {" "}
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
