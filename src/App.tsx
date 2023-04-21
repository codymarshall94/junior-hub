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

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="teams" element={<Teams />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/create-project" element={<CreateProject />} />
          <Route path="profile" element={<ProfileLayout />}>
            <Route path="bio" element={<ProfileBio />} />
            <Route path="skills" element={<ProfileSkills />} />
            <Route path="experience" element={<ProfileExperience />} />
          </Route>
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<h1>404</h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
