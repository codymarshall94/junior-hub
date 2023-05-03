import { useState, useEffect } from "react";

const tags = [
  {
    tag: "New Member",
    color: "bg-blue-500",
  },
  {
    tag: "Friendly",
    color: "bg-green-500",
  },
  {
    tag: "Helpful",
    color: "bg-yellow-500",
  },
  {
    tag: "Experienced",
    color: "bg-red-500",
  },
  {
    tag: "Leader",
    color: "bg-purple-500",
  },
  {
    tag: "Project Head",
    color: "bg-pink-500",
  },
];

interface RatingTagProps {
  rating: number;
  ratingCount: number;
}

//There will be a lot of logic here to determine what tag to display
//For now, it's just a placeholder
//We will add a rating system that will have categories like "Friendly", "Helpful", etc.
//The rating system will be a 5-star system
//The tag will be determined by the average rating
//If the user has less than 5 ratings, they will be a "New Member"

const RatingTag = ({ rating, ratingCount }: RatingTagProps) => {
  const [tag, setTag] = useState({
    tag: "",
    color: "",
  });

  useEffect(() => {
    getTag();
  }, [rating, ratingCount]);

  const getTag = () => {
    if (ratingCount < 5) {
      setTag(tags[0]);
    } else if (rating < 2.5) {
      setTag(tags[1]);
    } else if (rating < 3.5) {
      setTag(tags[2]);
    } else if (rating < 4.5) {
      setTag(tags[3]);
    } else if (rating < 5) {
      setTag(tags[4]);
    } else {
      setTag(tags[5]);
    }
  };

  return (
    <div className={`flex flex-row space-x-2 items-center bg-[#30AB4A] py-1 px-2 rounded-md ${tag.color}`}>
      <span className="text-white">{tag.tag}</span>
    </div>
  );
};

export default RatingTag;
