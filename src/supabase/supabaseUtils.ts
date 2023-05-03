import { supabase } from "./supabaseClient";
import Notification from "../types/notification";

export const getNotifications = async (id: string) => {
  const { data, error } = await supabase
    .from("notifications")
    .select("*")
    .eq("reciever_id", id);
  if (error) {
    console.log(error);
  }
  return data as Notification[];
};

export const createNotification = async (notificationObj: any) => {
  const { data, error } = await supabase
    .from("notifications")
    .insert([notificationObj]);
  if (error) {
    console.log(error);
  }
  return { data, error };
};

export const deleteNotification = async (id: string) => {
  const { data, error } = await supabase
    .from("notifications")
    .delete()
    .eq("id", id);
  if (error) {
    console.log(error);
  }
  return { data, error };
};
