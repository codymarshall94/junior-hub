import { useEffect, useState } from "react";
import { updateUser } from "../../supabase/supabaseAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProfileAvatar from "./ProfileAvatar";

const ProfileEditForm = ({ profile, loading }: any) => {
  const [editProfile, setEditProfile] = useState({
    full_name: "",
    email: "",
    title: "",
    avatar_url: "",
    skills: [],
    bio: "",
    personalwebsite: "",
    github: "",
    linkedin: "",
    password: "",
    repassword: "",
  });
  const save = () =>
    toast.success("Profile Saved Succesfully!", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  useEffect(() => {
    if (!loading) {
      const { full_name, email, title, bio, website, linkedin, github, avatar_url } =
        profile;

      if (profile) {
        setEditProfile({
          ...editProfile,
          full_name: full_name || "",
          email: email || "",
          title: title || "",
          avatar_url: avatar_url || "",
          bio: bio || "",
          personalwebsite: website || "",
          github: github || "",
          linkedin: linkedin || "",
        });
      }
    }
  }, [profile, loading]);

  const onUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    filePath: string
  ) => {
    setEditProfile({ ...editProfile, avatar_url: filePath });
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    console.log(id, value);
    setEditProfile({ ...editProfile, [e.target.id]: e.target.value });
    console.log(editProfile);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const updateInfo = {
      email: editProfile.email,
      full_name: editProfile.full_name,
      avatar_url: editProfile.avatar_url,
      title: editProfile.title,
      skills: editProfile.skills,
      bio: editProfile.bio,
      personalwebsite: editProfile.personalwebsite,
      github: editProfile.github,
      linkedin: editProfile.linkedin,
    };

    console.log("submitting", updateInfo);
    try {
      updateUser(updateInfo);
      save();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form className="mt-4" onSubmit={handleSubmit}>
        <ProfileAvatar url={editProfile.avatar_url} onUpload={onUpload} />
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-[#A3ABBA] text-xs font-bold my-2"
            htmlFor="name"
          >
            Full Name *
          </label>
          <input
            type="text"
            id="full_name"
            name="full_name"
            value={editProfile.full_name}
            onChange={handleChange}
            className="appearance-none block w-full border-[#E0E6F6] text-[#A3ABBA] border border-2 border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            required
          />
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-[#A3ABBA] text-xs font-bold my-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={editProfile.title}
            onChange={handleChange}
            className="appearance-none block w-full border-[#E0E6F6] text-[#A3ABBA] border border-2 border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            required
          />
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-[#A3ABBA] text-xs font-bold my-2"
            htmlFor="email"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={editProfile.email}
            onChange={handleChange}
            className="appearance-none block w-full border-[#E0E6F6] text-[#A3ABBA] border border-2 border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            required
          />
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-[#A3ABBA] text-xs font-bold my-2"
            htmlFor="bio"
          >
            Bio
          </label>
          <textarea
            id="bio"
            name="bio"
            value={editProfile.bio}
            onChange={handleChange}
            className="appearance-none block w-full border-[#E0E6F6] text-[#A3ABBA] border border-2 border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
        </div>
        <div className="w-1/2 md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-[#A3ABBA] text-xs font-bold my-2"
            htmlFor="personalwebsite"
          >
            Personal Website
          </label>
          <input
            type="url"
            id="personalwebsite"
            name="personalwebsite"
            value={editProfile.personalwebsite}
            onChange={handleChange}
            className="appearance-none block w-full border-[#E0E6F6] text-[#A3ABBA] border border-2 border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
        </div>
        <div className="w-1/2 md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-[#A3ABBA] text-xs font-bold my-2"
            htmlFor="github"
          >
            Github
          </label>
          <input
            type="url"
            id="github"
            name="github"
            value={editProfile.github}
            onChange={handleChange}
            className="appearance-none block w-full border-[#E0E6F6] text-[#A3ABBA] border border-2 border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
        </div>
        <div className="w-1/2 md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-[#A3ABBA] text-xs font-bold my-2"
            htmlFor="github"
          >
            LinkedIn
          </label>
          <input
            type="url"
            id="linkedin"
            name="linkedin"
            value={editProfile.linkedin}
            onChange={handleChange}
            className="appearance-none block w-full border-[#E0E6F6] text-[#A3ABBA] border border-2 border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
        </div>
        <div className="w-1/2 border-t border-gray-200 mt-4 pt-4"></div>
        <div>
          <h2 className="text-[#F68A3C] font-bold">Change your password</h2>
          <div className="flex items-center mt-4">
            <div className="w-1/4 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-[#A3ABBA] text-xs font-bold my-2"
                htmlFor="password"
              >
                Password
              </label>

              <input
                type="password"
                id="password"
                name="password"
                value={editProfile.password}
                onChange={handleChange}
                className="appearance-none block w-full border-[#E0E6F6] text-[#A3ABBA] border border-2 border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </div>
            <div className="w-1/4 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-[#A3ABBA] text-xs font-bold my-2"
                htmlFor="repassword"
              >
                Re-Password *
              </label>
              <input
                type="password"
                id="repassword"
                name="repassword"
                value={editProfile.repassword}
                onChange={handleChange}
                className="appearance-none block w-full border-[#E0E6F6] text-[#A3ABBA] border border-2 border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="w-1/2 mt-2 bg-[#3C65F5] text-white px-4 py-2 rounded mt-4"
        >
          Save All Changes
        </button>
      </form>
      <ToastContainer />
    </>
  );
};

export default ProfileEditForm;
