import Header from "../components_RB/Header";
import ResumeCards from "../components_RB/ResumeCards";
import ResumeTable from "../components_RB/ResumeTable";
import React from "react";

const ResumeBuilder = () => (
  <div className="flex-1 p-6 overflow-auto bg-white">
    <Header />
    <ResumeCards />
    <ResumeTable />
  </div>
);
export default ResumeBuilder;
