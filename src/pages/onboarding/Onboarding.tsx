import { useState } from "react";
import OnboardingSkills from "./OnboardingSkills";
import OnboardingBio from "./OnboardingBio";
import OnboardingLinks from "./OnboardingLinks";
import OnboardingName from "./OnboardingName";
import { useNavigate } from "react-router-dom";
import useUpdateUser from "../../hooks/useUpdateUser";
import { updateUser } from "../../supabase/supabaseAuth";
import OnboardingTitle from "./OnboardingTitle";

const Onboarding = () => {
  const [step, setStep] = useState(0);
  const { updateUserInfo, handleChange, handleCheckboxChange } =
    useUpdateUser();
  const navigate = useNavigate();

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSkip = () => {
    setStep(step + 1);
  };

  const handleFinishOnboarding = () => {
    updateUser(updateUserInfo as any);
    console.log(updateUserInfo);
    handleFinish();
  };

  const handleFinish = () => {
    navigate("/dashboard");
  };

  const questions = [
    {
      question: "What is your name?",
      helperText: "This is the name that will be displayed on your profile.",
      element: (
        <OnboardingName
          handleChange={handleChange}
          fullname={updateUserInfo.fullname}
        />
      ),
    },
    {
      question: "What is your title?",
      helperText: "Pick a title that best describes what you specialize in.",
      element: (
        <OnboardingTitle
          handleChange={handleChange}
          title={updateUserInfo.title}
        />
      ),
    },
    {
      question: "Tell the community a little bit about yourself.",
      helperText:
        "Keep it short and sweet, around 80-120 words. Sell yourself!",
      element: (
        <OnboardingBio handleChange={handleChange} bio={updateUserInfo.bio} />
      ),
    },
    {
      question: "What are your skills?",
      helperText: "Select up to 5 of your best skills.",
      element: (
        <OnboardingSkills
          handleCheckboxChange={handleCheckboxChange}
          skills={updateUserInfo.skills}
        />
      ),
    },
    {
      question: "Do you have work you can show off?",
      helperText: "It's okay if you don't have anything to show at the moment.",
      element: (
        <OnboardingLinks
          handleChange={handleChange}
          personalwebsite={updateUserInfo.personalwebsite}
          linkedin={updateUserInfo.linkedin}
          github={updateUserInfo.github}
        />
      ),
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center w-full mb-4">
        <h1 className="text-4xl mb-4 font-bold text-center">
          {questions[step].question}
        </h1>
        <p className="text-center text-[#6F80A2]">
          {questions[step].helperText}
        </p>
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        {questions[step].element}
        <div className="flex flex-row items-center justify-between w-1/2 bg-[#F7F8FA] p-4 mt-4">
          {step > 0 && (
            <button
              className="bg-blue-500 text-white p-4 rounded hover:bg-blue-600"
              onClick={handleBack}
            >
              {" "}
              Back
            </button>
          )}
          <div className="flex flex-row items-center justify-center">
            <span className="font-bold">
              Step {step + 1} / {questions.length}
            </span>
          </div>

          <div className="flex">
            {step < questions.length - 1 ||
              (step === 0 && (
                <button
                  className="text=[#A3ABBA] p-4 rounded"
                  onClick={handleSkip}
                >
                  {" "}
                  Skip
                </button>
              ))}
            {step < questions.length - 1 && (
              <button
                className="bg-blue-500 text-white p-4 rounded hover:bg-blue-600"
                onClick={handleNext}
              >
                {" "}
                Next
              </button>
            )}

            {step + 1 === questions.length && (
              <button
                className="bg-blue-500 text-white p-4 rounded hover:bg-blue-600"
                onClick={() => handleFinishOnboarding()}
              >
                {" "}
                Finish
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
