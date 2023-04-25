import { useState } from "react";

interface UserMetaData {
  fullname: string;
  bio: string;
  skills: string[];
  personalwebsite: string;
  linkedin: string;
  github: string;
}

const useOnBoardingInfo = () => {
  const [updateUserInfo, setUpdateUserInfo] = useState<UserMetaData>({
    fullname: "",
    bio: "",
    skills: [],
    personalwebsite: "",
    linkedin: "",
    github: "",
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUpdateUserInfo({ ...updateUserInfo, [name]: value });
    console.log(updateUserInfo);
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    if (checked) {
      setUpdateUserInfo({
        ...updateUserInfo,
        skills: [...updateUserInfo.skills, name],
      });
    } else {
      setUpdateUserInfo({
        ...updateUserInfo,
        skills: updateUserInfo.skills.filter((skill) => skill !== name),
      });
    }
    console.log(updateUserInfo);
  };

  return { updateUserInfo, handleChange, handleCheckboxChange };
};

export default useOnBoardingInfo;
