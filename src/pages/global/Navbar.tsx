import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { logoutUser } from "../../supabase/supabaseAuth";
import SmallProfileAvatar from "../../components/SmallProfileAvatar";
import Logo from "../../assets/logo/devcollab-website-favicon-color (1).png";
const links = [
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

const mainLinks = [
  {
    name: "Home",
    link: "/home",
  },
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "Resources",
    link: "/resources",
  },
];

interface AvatarDropdownMenuProps {
  children: any;
  profileId: string;
}

const AvatarDropdownMenu = ({
  children,
  profileId,
}: AvatarDropdownMenuProps) => {
  const [show, setShow] = useState(false);
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

  const avatarLinks = [
    {
      name: "View Profile",
      link: `/profile/${profileId}`
    },
    {
      name: "My Projects",
      link: "/my-projects",
    },
  ];

  return (
    <div className="relative cursor-pointer" onClick={() => setShow(!show)}>
      {children}
      {show && (
        <div className="absolute right-0 w-48 py-2 mt-2 bg-white rounded-md shadow-xl z-20">
          {avatarLinks.map((link) => (
            <Link
              to={link.link}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              key={link.name}
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={handleLogout}
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default function Navbar({ profile }: { profile: any }) {
  const [currentPage, setCurrentPage] = useState("Home");
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.split("/")[1];
    setCurrentPage(path);
  }, [location]);

  return (
    <div className="flex items-center justify-between w-full h-20 py-4 px-8">
      {/* Logo */}
      <Link to="/home" className="flex w-10 h-10 justify-center">
        <img src={Logo} alt="logo" className="w-full h-full" />
      </Link>
      <div className="flex items-center space-x-4">
        <ul className="flex items-center space-x-4">
          {mainLinks.map((link) => (
            <Link
              to={link.link}
              className={`flex items-center p-2 space-x-2 hover:text-blue-500 ${
                currentPage === link.name.toLowerCase()
                  ? "border-b-2 border-blue-500 text-blue-500"
                  : ""
              }`}
              key={link.name}
            >
              {link.name}
            </Link>
          ))}
        </ul>
      </div>
      <div className="flex">
        <ul className="pt-2 pb-4 flex items-center space-x-4 mr-4">
          {links.map((link) => (
            <Link
              to={link.link}
              className="flex items-center p-2 space-x-2 rounded-md hover:bg-[#F8FAFF]"
              key={link.name}
            >
              {link.svg}
            </Link>
          ))}
        </ul>
        <AvatarDropdownMenu
          children={<SmallProfileAvatar url={profile?.avatar_url} userId={profile?.id} />}
          profileId={profile?.id}
        />
      </div>
    </div>
  );
}
