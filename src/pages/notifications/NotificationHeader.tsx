import { useState } from "react";
import { deleteNotification } from "../../supabase/supabaseUtils";
import SmallProfileAvatar from "../../components/SmallProfileAvatar";

interface NotificationHeaderProps {
  message: string;
  time: Date;
  id: string;
  avatar: string;
  senderId: string;
}

const NotificationHeader = ({
  message,
  time,
  id,
  avatar,
  senderId,
}: NotificationHeaderProps) => {
  const [dropdown, setDropdown] = useState(false);

  const timeAgo = (time: Date) => {
    const now = new Date();
    const notificationDate = new Date(time);
    const timeDiff = now.getTime() - notificationDate.getTime();
    const minute = 60 * 1000;
    const hour = minute * 60;
    const day = hour * 24;
    const week = day * 7;
    const month = day * 30;
    const year = day * 365;

    if (timeDiff < minute) {
      return "just now";
    } else if (timeDiff < hour) {
      const diff = Math.floor(timeDiff / minute);
      return `${diff} ${diff === 1 ? "minute" : "minutes"} ago`;
    } else if (timeDiff < day) {
      const diff = Math.floor(timeDiff / hour);
      return `${diff} ${diff === 1 ? "hour" : "hours"} ago`;
    } else if (timeDiff < week) {
      const diff = Math.floor(timeDiff / day);
      return `${diff} ${diff === 1 ? "day" : "days"} ago`;
    } else if (timeDiff < month) {
      const diff = Math.floor(timeDiff / week);
      return `${diff} ${diff === 1 ? "week" : "weeks"} ago`;
    } else if (timeDiff < year) {
      const diff = Math.floor(timeDiff / month);
      return `${diff} ${diff === 1 ? "month" : "months"} ago`;
    } else {
      const diff = Math.floor(timeDiff / year);
      return `${diff} ${diff === 1 ? "year" : "years"} ago`;
    }
  };

  const readableDate = timeAgo(time);

  const handleDeleteClick = async (id: string) => {
    try {
      await deleteNotification(id);
    } catch (error) {
      console.log(error);
    }
    setDropdown(false);
  };

  return (
    <div className="relative flex flex-col items-start w-full h-16 py-2">
      <div className="flex items-center space-x-2">
        {avatar && <SmallProfileAvatar url={avatar} userId={senderId} />}
        <span className="font-bold">{message}</span>
      </div>
      <div className=" flex items-center space-x-2">
        <span className="font-sm text-gray-500">{readableDate}</span>
      </div>
      <div
        className="absolute right-0 top-0 hover:bg-gray-100 rounded-full p-1 cursor-pointer"
        onClick={() => setDropdown(!dropdown)}
      >
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
            d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
        {dropdown && (
          <div className="absolute right-0 top-0 mt-8 w-48 bg-white rounded-md shadow-lg z-10">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <div
                className="flex items-center justify-between block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                role="menuitem"
                onClick={() => handleDeleteClick(id)}
              >
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
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
                Delete Notification
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationHeader;
