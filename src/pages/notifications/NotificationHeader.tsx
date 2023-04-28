interface NotificationHeaderProps {
  name: string;
  time: Date;
}

const NotificationHeader = ({ name, time }: NotificationHeaderProps) => {
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

  return (
    <div className="">
      <div className="flex items-center space-x-2">
        <span className="font-bold">{name}</span>
      </div>
      <div className=" flex items-center space-x-2">
        <span className="font-sm text-gray-500">{readableDate}</span>
      </div>
    </div>
  );
};

export default NotificationHeader;
