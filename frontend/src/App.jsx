// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Sidebar from "./components_RB/Sidebar.jsx";
// import Home from "./Components/Home";
// import JobTracker from "./Components/JobTracker";
// import Statistics from "./Components/Statistics";
// import ResumeBuilder from "./Components/ResumeBuilder";
// import ResumeEditorPage from "./Components/ResumeEditor/ResumeEditorPage.jsx";
// import "./App.css";
// import React from "react";

// import Landing from "./landing/Landing.jsx";
// const App = () => {
//   return (
//     <Router>
//       <div className="flex">
//         <Sidebar />

//         <div className="flex-1">
//           <Routes>
//             <Route path="/" element={<Landing />} />
//             <Route path="/dashboard" element={<Home />} />
//             <Route path="/dashboard/job-tracker" element={<JobTracker />} />
//             <Route path="/dashboard/statistics" element={<Statistics />} />
//             <Route
//               path="/dashboard/resume-builder"
//               element={<ResumeBuilder />}
//             />
//             <Route
//               path="/dashboard/score-resume"
//               element={<ResumeEditorPage />}
//             />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// };

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SidebarProvider, SidebarContext } from "./components_RB/SidebarContext";
import { useContext } from "react"; // CHANGE: Kept import for use in DashboardLayout
import Sidebar from "./components_RB/Sidebar.jsx";
import Home from "./Components/Home";
import JobTracker from "./Components/JobTracker";
import Statistics from "./Components/Statistics";
import ResumeBuilder from "./Components/ResumeBuilder";
import ResumeEditorPage from "./Components/ResumeEditor/ResumeEditorPage.jsx";
import Landing from "./landing/Landing.jsx";
import Login from "./Components/auth/Login.jsx";
import Signup from "./Components/auth/Signup.jsx";
import "./App.css";

// CHANGE: Added DashboardLayout component to handle sidebar and dynamic padding
const DashboardLayout = ({ children }) => {
  const { isOpen } = useContext(SidebarContext); // CHANGE: Moved useContext here, inside SidebarProvider
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div
        className={`flex-1 ${isOpen ? "pl-64" : "pl-16"} transition-all duration-300 overflow-y-auto content-container`}
      >
        {children}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
        <SidebarProvider>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/signup" element={<Signup />} />
            <Route
              path="/dashboard/*"
              element={
                <DashboardLayout> {/* CHANGE: Use DashboardLayout for /dashboard/* routes */}
                  <Routes>
                    <Route index element={<Home />} />
                    <Route path="job-tracker" element={<JobTracker />} />
                    <Route path="statistics" element={<Statistics />} />
                    <Route path="resume-builder" element={<ResumeBuilder />} />
                    <Route path="score-resume" element={<ResumeEditorPage />} />
                  </Routes>
                </DashboardLayout>
              }
            />
          </Routes>
        </SidebarProvider>

    </Router>
  );
};

export default App;