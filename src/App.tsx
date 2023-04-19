import Sidebar from "./pages/global/Sidebar";
import CreateProject from "./pages/projects/CreateProject";
import Projects from "./pages/projects/Projects";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App flex">
      <div>
        <Sidebar />
      </div>
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/create-project" element={<CreateProject />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </div>
  );
}

export default App;
