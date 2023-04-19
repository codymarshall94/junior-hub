const Pill = ({ pill }: { pill: string }) => {
  return (
    <div className="rounded bg-[#EFF3FC] p-2 w-fit">
      <p className="text-sm">{pill}</p>
    </div>
  );
};

export default Pill;
