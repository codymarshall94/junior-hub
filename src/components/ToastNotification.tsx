import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ToastNotificationProps {
  message: string;
  type: string;
  onClose: () => void;
}

const ToastNotification = ({
  message,
  type,
  onClose,
}: ToastNotificationProps) => {
  const save = () =>
    toast.success("Profile Saved Succesfully!", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  return <ToastContainer />;
};

export default ToastNotification;
