import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ToastNotificationProps {
  message: string;
  type: string;
}

const ToastNotification = ({
  message,
  type,
}: ToastNotificationProps) => {
  switch (type) {
    case "success":
      toast.success(message, {
        position: "bottom-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
      });
      break;
    case "error":
      toast.error(message, {
        position: "bottom-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
      });
      break;
    case "info":
      toast.info(message, {
        position: "bottom-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
      });
      break;
    case "warn":
      toast.warn(message, {
        position: "bottom-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
      });
      break;
    default:
      toast(message);
  }

  return <ToastContainer />;
};

export default ToastNotification;
