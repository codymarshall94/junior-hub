interface Notification {
  id: string;
  created_at: Date;
  project_id: string;
  reciever_id: string;
  sender_id: string;
  status: string;
  message: string;
  type: string;
  sender_avatar: string;
}

export default Notification;
