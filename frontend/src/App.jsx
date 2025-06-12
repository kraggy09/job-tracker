import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./components_RB/Sidebar.jsx";
import Home from "./Components/Home";
import JobTracker from "./Components/JobTracker";
import Statistics from "./Components/Statistics";
import ResumeBuilder from "./Components/ResumeBuilder";
import ResumeEditorPage from "./Components/ResumeEditor/ResumeEditorPage.jsx";
import "./App.css";
import React from "react";

import Landing from "./landing/Landing.jsx";
const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/dashboard" element={<Home />} />
            <Route path="/dashboard/job-tracker" element={<JobTracker />} />
            <Route path="/dashboard/statistics" element={<Statistics />} />
            <Route
              path="/dashboard/resume-builder"
              element={<ResumeBuilder />}
            />
            <Route
              path="/dashboard/score-resume"
              element={<ResumeEditorPage />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
