import { Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import Navbar from "./Components/Navbar";
import SignUp from "./pages/SignUp";
import Resume from "./pages/Resume";
import Homepage from "./pages/Homepage";

function App() {
  const location = useLocation();

  // Check if the current path is the signup page
  const hideNavbar =
    location.pathname === "/signup" || location.pathname === "/login";

  return (
    <div className=" min-h-[100%] h-[100%]   flex md:items-center md:justify-center  flex-col">
      {!hideNavbar && <Navbar />}

      <div></div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Homepage />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
