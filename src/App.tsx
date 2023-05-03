import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { supabase } from "./supabase/supabaseClient";
import Dashboard from "./pages/dashboard/Dashboard";
import CreateProject from "./pages/projects/CreateProject";
import ProjectListings from "./pages/projects/ProjectListings";
import ProfileLayout from "./layouts/ProfileLayout";
import RootLayout from "./layouts/RootLayout";
import ProfileEdit from "./pages/profile/ProfileEdit";
import Landing from "./pages/landing/Landing";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Onboarding from "./pages/onboarding/Onboarding";
import Profile from "./pages/profile/Profile";
import Notifications from "./pages/notifications/Notifications";
import Projects from "./pages/projects/Projects";
import Project from "./pages/projects/Project";

function App() {
  const [session, setSession] = useState<any>(null);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [profile, setProfile] = useState<any>(null);

  const getProfile = async (id: string) => {
    try {
      setLoading(true);
      const user = await supabase
        .from("profiles")
        .select(`*`)
        .eq("id", id)
        .single();
      setProfile(user.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
    });
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
      setUser(session?.user);
      getProfile(session?.user?.id as string);
      setLoading(false);
    });
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route element={<RootLayout profile={profile} />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="projects" element={<ProjectListings id={user?.id} />} />
          <Route
            path="projects/create-project"
            element={<CreateProject id={user?.id} />}
          />
          <Route path="projects/:id" element={<Project />} />
          <Route path="my-projects" element={<Projects id={user?.id} />} />
          <Route element={<ProfileLayout />}>
            <Route path="profile" element={<Profile session={session} />} />
          </Route>
          <Route
            path="profile/edit-profile"
            element={<ProfileEdit session={session} />}
          />
          <Route
            path="notifications"
            element={<Notifications id={user?.id} />}
          />
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<h1>404</h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
