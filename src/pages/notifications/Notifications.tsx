import { useEffect, useState } from "react";
import { supabase } from "../../supabase/supabaseClient";
import NotificationHeader from "./NotificationHeader";
import NotificationButtons from "./NotificationButtons";

const Notifications = ({ id }: { id: string }) => {
  const [notifications, setNotifications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getNotifications = async () => {
      const { data, error } = await supabase
        .from("notifications")
        .select("*")
        .eq("reciever_id", id);
      if (error) {
        console.log(error);
      }
      setNotifications(data as any);
      setLoading(false);
    };
    getNotifications();
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
