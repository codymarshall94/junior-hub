type ProfileBioProps = {
  bio: string;
};

const ProfileBio = ({ bio }: ProfileBioProps) => {
  return (
    <div className="p-4">
      <h1 className="font-bold text-xl mb-4">Profile Bio</h1>
      <p className="text-gray-500 w-1/2">
        {bio || "This user has not added a bio yet."}
      </p>
    </div>
  );
};

export default ProfileBio;
