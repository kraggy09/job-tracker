import { Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import JobTracker from "./Components/JobTracker";
import Navbar from "./Components/Navbar";
import SignUp from "./Components/SignUp";

function App() {
  const location = useLocation();

  // Check if the current path is the signup page
  const hideNavbar =
    location.pathname === "/signup" || location.pathname === "/login";

  return (
    <div className="min-h-[100%]">
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<JobTracker />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
