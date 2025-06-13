import CommonHeader from "../components_RB/CommonHeader";
import ResumeCards from "../components_RB/ResumeCards";
import ResumeTable from "../components_RB/ResumeTable";
import React from "react";

const ResumeBuilder = () => (
  <div className="flex-1 overflow-auto bg-white">
    <div className="px-6 py-8">
    <CommonHeader title="RESUME BUILDER" />
    <ResumeCards />
    <ResumeTable />
  </div>
  </div>
);
export default ResumeBuilder;
