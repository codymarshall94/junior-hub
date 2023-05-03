import { supabase } from "../../supabase/supabaseClient";


const NotificationButtons = ({ notification }: { notification: any }) => {
  const handleDecline = async (notification: any) => {
    const { data, error } = await supabase
      .from("notifications")
      .update({ status: "declined" })
      .eq("id", notification.id);
    if (error) {
      console.log(error);
    }
    console.log(data);
  };

  const handleAcceptMember = async (notification: any) => {
    const { data, error } = await supabase.from("project_members").insert({
      member_id: notification.sender_id,
      project_id: notification.project_id,
    });
    if (error) {
      console.log(error);
    }
    console.log(data);
  };

  const handleAccept = async (notification: any) => {
    const { data, error } = await supabase
      .from("notifications")
      .update({ status: "accepted" })
      .eq("id", notification.id);
    if (error) {
      console.log(error);
    }
    console.log(data);
    handleAcceptMember(notification);
  };

  return (
    <>
      {notification.status === "unread" ? (
        <div className="flex space-x-2 mt-2 bg-[#F7F8FA] p-2 rounded-md">
          <button
            onClick={() => handleAccept(notification)}
            className="bg-[#1CE177] hover:bg-[#3C65F5]  text-white font-bold p-2 w-1/4 mt-4 rounded-md w-36 transition-all duration-300 ease-in-out"
          >
            Accept
          </button>
          <button
            onClick={() => handleDecline(notification)}
            className="hover:bg-[#3C65F5] text-black hover:text-white border border-2 border-[#E0E6F6] font-bold p-2 w-1/4 mt-4 rounded-md w-36 transition-all duration-300 ease-in-out"
          >
            Decline
          </button>
        </div>
      ) : notification.status === "accepted" ? (
        <span className="text-[#1CE177] font-bold">Accepted</span>
      ) : notification.status === "declined" ? (
        <span className="text-[#F87171] font-bold">Declined</span>
      ) : (
        <span className="text-[#3C65F5] font-bold">Pending</span>
      )}
    </>
  );
};

export default NotificationButtons;
