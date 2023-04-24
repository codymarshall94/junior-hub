import { supabase } from "./supabaseClient";

interface Credentials {
  email: string;
  password: string;
}

export const registerUser = async (credentials: Credentials) => {
  const { data, error } = await supabase.auth.signUp(credentials);
  return { data, error };
};

export const loginUser = async (credentials: Credentials) => {
  const { data, error } = await supabase.auth.signInWithPassword(credentials);
  return { data, error };
};

export const logoutUser = async () => {
  const { error } = await supabase.auth.signOut();
  return { error };
};

export const fetchUser = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  console.log(user);
  return user;
};

export const updateUser = async (info: any) => {
  const { fullname, email } = info;
  const { data, error } = await supabase.auth.updateUser({
    data: {
      fullname,
      email,
    },
  });
  return { data, error };
};
