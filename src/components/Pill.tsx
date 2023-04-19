const pillColors = [
  { name: "JavaScript", color: "#F7DF1E" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "React", color: "#61DAFB" },
  { name: "Vue", color: "#42B883" },
  { name: "Angular", color: "#DD0031" },
  { name: "Svelte", color: "#FF3E00" },
  { name: "Node", color: "#339933" },
  { name: "Python", color: "#3776AB" },
];


const Pill = ({ pill }: { pill: string }) => {
  const pillColor = pillColors.find((color) => color.name === pill);
  return (
    <div
      className="rounded-full bg-[#F4F6F8] p-2 w-fit"
      style={{ backgroundColor: pillColor?.color }}
    >
      <p className="text-sm font-bold">{pill}</p>
    </div>
  );
};

export default Pill;