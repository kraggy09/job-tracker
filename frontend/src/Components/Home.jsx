import React, { useState } from "react";
import {
  FileText,
  Calendar,
  MessageSquare,
  TrendingUp,
  Download,
  CheckCircle,
} from "lucide-react";
import CommonHeader from "../components_RB/CommonHeader";

export default function JobHuntDashboard() {
  const [activeTab, setActiveTab] = useState("Quick Tips");

  const stats = [
    { icon: FileText, label: "Applications", value: "12" },
    { icon: Calendar, label: "Interviews", value: "3" },
    { icon: MessageSquare, label: "Follow-ups", value: "5" },
    { icon: TrendingUp, label: "Success Rate", value: "25%" },
  ];

  const tabs = ["Quick Tips", "Job Boards", "Interview Prep"];

  const quickTips = [
    "Update your LinkedIn profile regularly",
    "Follow up within 3-5 days after applying",
  ];

  const jobBoards = [
    "Customize resume for each application",
    "Research company culture and values",
  ];

  const interviewPrep = [
    "Practice common interview questions",
    "Prepare questions to ask the interviewer",
  ];

  const getTipsForTab = (tab) => {
    switch (tab) {
      case "Quick Tips":
        return quickTips;
      case "Job Boards":
        return jobBoards;
      case "Interview Prep":
        return interviewPrep;
      default:
        return quickTips;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="px-6 py-8 ">
        <CommonHeader title="JOB HUNT DASHBOARD" />

        {/* Welcome Section */}
        <div className="text-center mb-8">
          <div className="flex justify-center items-center mb-4">
            <span className="text-4xl mr-2">🎉</span>
            <h2 className="text-3xl font-bold text-gray-900 mx-4">
              Good afternoon, Zunaib !
            </h2>
            <span className="text-4xl ml-2">🎊</span>
          </div>
          <p className="text-gray-600 text-lg">
            Your dream job is waiting. Let's make it happen!
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 border border-gray-200 text-center aspect-square flex flex-col justify-center shadow-md"
            >
              <div className="flex justify-center mb-2">
                <stat.icon size={30} className="text-gray-800" />
              </div>
              <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
              <p className="text-4xl font-bold text-gray-900">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4 border-b-2 border-black inline-block pb-1">
            Quick Actions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Track Applications Card */}
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mr-4">
                  <FileText size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Track Applications
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Use our intuitive dashboard to organize and monitor all of
                    your job applications in one place. Never lose track of an
                    opportunity again.
                  </p>
                </div>
              </div>
              <button className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors">
                Add New Job
              </button>
            </div>

            {/* Browser Extension Card */}
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mr-4">
                  <Download size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Browser Extension
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Install our Chrome extension to easily save job postings as
                    you browse. One-click saving from LinkedIn, Indeed, and
                    other job sites.
                  </p>
                </div>
              </div>
              <button className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors">
                Get Extension
              </button>
            </div>
          </div>
        </div>

        {/* Resources Hub */}
      </div>
    </div>
  );
}
