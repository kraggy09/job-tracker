import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./components_RB/Sidebar.jsx";
import Home from "./components/Home";
import JobTracker from "./components/JobTracker";
import Statistics from "./components/Statistics";
import ResumeBuilder from "./components/ResumeBuilder";
import ScoreMyResume from "./components/ScoreMyResume";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/job-tracker" element={<JobTracker />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/resume-builder" element={<ResumeBuilder />} />
            <Route path="/score-resume" element={<ScoreMyResume />} />
          </Routes>
        </div>
      </div>
    </Router>
  </React.StrictMode>
);
