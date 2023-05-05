import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getNotifications } from "../../supabase/supabaseUtils";
import Notification from "../../types/notification";
import NotificationHeader from "./NotificationHeader";
import NotificationButtons from "./NotificationButtons";
import Loading from "../../components/Loading";

const Notifications = ({ id }: { id: string }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);

  console.log(notifications);

  useEffect(() => {
    getNotifications(id)
      .then((notifications) => {
        if (!notifications) return console.log("No notifications");
        setNotifications(notifications);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col space-y-4 p-4 w-3/4 border-2 border-gray-200 rounded-md mx-auto my-4">
      <h1 className="text-2xl font-bold">Notifications</h1>
      <div className="flex flex-col">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="border-t-2 border-gray-200 py-4"
          >
            <NotificationHeader
              message={notification.message}
              time={notification.created_at}
              id={notification.id}
              avatar={notification.sender_avatar || ""}
              senderId={notification.sender_id}
            />
            {notification.type === "request_to_join" && (
              <NotificationButtons notification={notification} />
            )}
            {notification.type === "accepted_request_to_join" && (
              <Link
                to={`/projects/${notification.project_id}`}
                className="bg-[#1CE177] hover:bg-[#3C65F5]  text-white font-bold p-2 w-1/4 mt-4 rounded-md w-36 transition-all duration-300 ease-in-out"
              >
                View Project
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
