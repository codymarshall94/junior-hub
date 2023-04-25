const techStackOptions = [
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "GraphQL",
  "TypeScript",
  "JavaScript",
  "Tailwind",
  "React Native",
  "C++",
];

type SkillsProps = {
  handleCheckboxChange: any;
  skills: string[];
};

const OnboardingSkills = ({ handleCheckboxChange, skills }: SkillsProps) => {
  return (
    <>
      <div className="grid grid-cols-3 gap-2 my-4">
        {techStackOptions.map((tech) => (
          <div
            key={tech}
            className="flex items-center w-full p-3 border-[#E0E6F6] text-[#A3ABBA] border border-2 rounded-t-lg"
          >
            <input
              type="checkbox"
              id={tech}
              name={tech}
              value={tech}
              onChange={(e) => handleCheckboxChange(e)}
              className="mr-2"
              disabled={skills.length >= 5 && !skills.includes(tech)}
            />
            <label htmlFor={tech}>{tech}</label>
          </div>
        ))}
      </div>
    </>
  );
};

export default OnboardingSkills;
