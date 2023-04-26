import { supabase } from "./supabaseClient";

interface Credentials {
  email: string;
  password: string;
}

interface ProfileData {
  full_name: string;
  email: string;
  title: string;
  avatar_url: string;
  bio: string;
  skills: string[];
  personalwebsite: string;
  linkedin: string;
  github: string;
}

export const registerUser = async (credentials: Credentials) => {
  console.log("registering user");
  const { data, error } = await supabase.auth.signUp(credentials);
  return { data, error };
};

export const loginUser = async (credentials: Credentials) => {
  console.log("logging in user");
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

export const updateUser = async (info: ProfileData) => {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const {
    full_name,
    title,
    email,
    avatar_url,
    bio,
    personalwebsite,
    linkedin,
    github,
    skills,
  } = info;
  console.log(user?.id + "user id");
  const { data, error } = await supabase
    .from("profiles")
    .update({
      full_name,
      title,
      email,
      avatar_url,
      bio,
      website: personalwebsite,
      linkedin,
      github,
      skills,
    })
    .eq("id", user?.id);
  return { data, error };
};
