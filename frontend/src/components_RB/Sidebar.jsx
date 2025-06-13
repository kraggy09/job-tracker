import { useState } from "react";
import { useContext } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { FaChartBar } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { IoReorderThree } from "react-icons/io5";
import { FaSuitcaseRolling } from "react-icons/fa6";
import { TbFileCv } from "react-icons/tb";
import { LuChartPie } from "react-icons/lu";  
import { SidebarContext } from "./SidebarContext";

const Sidebar = () => {
 const { isOpen, toggleSidebar } = useContext(SidebarContext);
  const location = useLocation();

  if (window.location.pathname === "/") {
    return null; // Hide sidebar on the landing page
  }
  if (window.location.pathname === "/auth/login") {
    return null; // Hide sidebar on the landing page
  }
  if (window.location.pathname === "/auth/signup") {
    return null; // Hide sidebar on the landing page
  }
  return (
    <div
      className={`fixed top-0 left-0 ${
        isOpen ? "w-64 items-start px-4" : "w-16 items-center"
      } bg-gray-100 border-r flex flex-col py-4 transition-all duration-300 h-screen z-10`}
    >
      {/* Top: Logo + Toggle Button */}
      <div className="flex items-center justify-between w-full px-2 mb-6">
        {isOpen && (
          <h1 className="text-xl font-bold text-black whitespace-nowrap">
            JobGenie
          </h1>
        )}
        <button onClick={toggleSidebar} className="text-gray-600">
          <IoReorderThree className="w-7 h-7" />
        </button>
      </div>

      {/* Main Navigation */}
      <div className="flex flex-col gap-4 w-full">
        <SidebarItem
          to="/dashboard"
          icon={<IoMdHome className="w-7 h-7" />}
          label="Home"
          isOpen={isOpen}
          isActive={location.pathname === "/dashboard"}
        />
        <SidebarItem
          to="/dashboard/job-tracker"
          icon={<FaSuitcaseRolling className="w-7 h-7" />}
          label="Job Tracker"
          isOpen={isOpen}
          isActive={location.pathname === "/dashboard/job-tracker"}
        />
        <SidebarItem
          to="/dashboard/statistics"
          icon={<FaChartBar className="w-7 h-7" />}
          label="Statistics"
          isOpen={isOpen}
          isActive={location.pathname === "/dashboard/statistics"}
        />
      </div>

      {/* Separator */}
      <div className="my-4 w-full border-t border-gray-300" />

      {/* Tools */}
      <div className="flex flex-col gap-4 w-full">
        <SidebarItem
          to="/dashboard/resume-builder"
          icon={<TbFileCv className="w-7 h-7" />}
          label="Resume Builder"
          isOpen={isOpen}
          badge="New"
          isActive={location.pathname === "/dashboard/resume-builder"}
        />
        <SidebarItem
          to="/dashboard/score-resume"
          icon={<LuChartPie className="w-7 h-7" />}
          label="Score my Resume"
          isOpen={isOpen}
          isActive={location.pathname === "/dashboard/score-resume"}
        />
      </div>

      {/* Spacer to push everything upward and remove white bottom */}
      <div className="flex-grow" />
    </div>
  );
};

const SidebarItem = ({ to, icon, label, isOpen, isActive, badge }) => {
  return (
    <Link to={to} className="w-full">
      <div
        className={`flex items-center gap-4 cursor-pointer text-gray-700 hover:text-black ${
          isOpen ? "justify-start pl-1" : "justify-center"
        } ${isActive ? "bg-black/10 rounded-md p-2 text-black" : ""}`}
      >
        <div>{icon}</div>
        {isOpen && (
          <div className="flex items-center gap-2">
            <span className="text-base">{label}</span>
            {badge && (
              <span className="text-xs bg-green-500 text-white px-2 rounded-full">
                {badge}
              </span>
            )}
          </div>
        )}
      </div>
    </Link>
  );
};

export default Sidebar;
