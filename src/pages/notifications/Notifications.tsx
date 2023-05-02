import { useEffect, useState } from "react";
import { getNotifications } from "../../supabase/supabaseUtils";
import Notification from "../../types/notification";
import NotificationHeader from "./NotificationHeader";
import NotificationButtons from "./NotificationButtons";

const Notifications = ({ id }: { id: string }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);

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
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col space-y-4 p-4 w-full">
      <h1 className="text-2xl font-bold">Notifications</h1>
      <div className="flex flex-col p-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="border-b-2 border-gray-200 py-4 w-1/4"
          >
            <NotificationHeader
              name={notification.message}
              time={notification.created_at}
            />
            <NotificationButtons notification={notification} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
