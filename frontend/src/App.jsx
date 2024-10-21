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
    <div className=" min-h-[100%] h-[100%]   flex md:items-center md:justify-center  flex-col">
      {!hideNavbar && <Navbar />}
      <div className="min-h-[100%] h-[100%]  relative w-full flex-1   flex flex-col max-w-[1440px]  md:items-center  justify-center  ">
        <div className="min-h-[50px]"></div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<JobTracker />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
