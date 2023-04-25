import Dashboard from "./pages/dashboard/Dashboard";
import CreateProject from "./pages/projects/CreateProject";
import Projects from "./pages/projects/Projects";
import { Routes, Route } from "react-router-dom";
import Settings from "./pages/settings/Settings";
import Teams from "./pages/teams/Teams";
import ProfileBio from "./pages/profile/ProfileBio";
import ProfileSkills from "./pages/profile/ProfileSkills";
import ProfileExperience from "./pages/profile/ProfileExperience";
import ProfileLayout from "./layouts/ProfileLayout";
import RootLayout from "./layouts/RootLayout";
import ProfileEdit from "./pages/profile/ProfileEdit";
import Landing from "./pages/landing/Landing";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { useEffect, useState } from "react";
import Onboarding from "./pages/onboarding/Onboarding";
import { supabase } from "./supabase/supabaseClient";

function App() {
  const [session, setSession] = useState<any>(null);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
    });
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
      setUser(session?.user);
    });
    setLoading(false);
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
        <Route element={<RootLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="teams" element={<Teams />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/create-project" element={<CreateProject />} />
          <Route path="profile" element={<ProfileLayout user={user} />}>
            <Route path="bio" index element={<ProfileBio bio={user ? user["user_metadata"].bio : ""} />} />
            <Route path="skills" element={<ProfileSkills />} />
            <Route path="experience" element={<ProfileExperience />} />
          </Route>
          <Route
            path="profile/edit-profile"
            element={<ProfileEdit user={user} />}
          />
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<h1>404</h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
