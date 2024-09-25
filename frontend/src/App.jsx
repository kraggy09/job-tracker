import { Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import JobTracker from "./Components/JobTracker";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<JobTracker />} />
    </Routes>
  );
}

export default App;
