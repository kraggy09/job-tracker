import React from "react";
import { ArrowLeft } from "lucide-react";

// Header component with consistent design
const Header = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      <div className="flex items-center">
        <button className="mr-4 p-2 hover:bg-gray-100 rounded-full">
          <ArrowLeft size={20} className="text-gray-600" />
        </button>
        <h1 className="text-xl font-semibold">Job Hunt </h1>
      </div>
      <div className="flex items-center space-x-4">
        <button className="relative p-3 rounded-full bg-white shadow-md hover:bg-gray-100 transition duration-200 ease-in-out">
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 17h5l-1.405-1.405M19 13V9a7 7 0 10-14 0v4l-1.405 1.405A1 1 0 005 17h5m4 0h2"
            />
          </svg>
          {/* Optional Notification Count Badge */}
          <span className="absolute -top-0.5 -right-0.5 flex items-center justify-center w-4 h-4 text-[10px] font-bold text-white bg-red-500 rounded-full shadow">
            3
          </span>
        </button>

        <img
          src="https://icons.veryicon.com/png/o/miscellaneous/standard/avatar-15.png"
          className="w-10 h-10 rounded-full border border-gray-200 shadow-sm hover:shadow-md transition duration-200 ease-in-out"
          alt="User Avatar"
        />
      </div>
    </div>
  );
};

export default function StatisticsPage() {
  const statusData = [
    { name: "Wishlist", value: 1, color: "#3B82F6", percentage: 25 },
    { name: "Applied", value: 1, color: "#10B981", percentage: 25 },
    { name: "Ghosted", value: 1, color: "#6B7280", percentage: 25 },
    { name: "Follow up", value: 1, color: "#F97316", percentage: 25 },
  ];

  const jobSourceData = [
    { name: "Extracker", value: 3, color: "#EF4444" },
    { name: "LinkedIn", value: 1, color: "#0077B5" },
  ];

  const columnData = [
    { name: "Wishlist", value: 1, color: "#3B82F6" },
    { name: "Applied", value: 1, color: "#10B981" },
    { name: "Interviewing", value: 1, color: "#6B7280" },
    { name: "Offer", value: 1, color: "#6B7280" },
    { name: "Rejected", value: 1, color: "#F97316" },
    { name: "Ghosted", value: 1, color: "#6B7280" },
    { name: "Follow up", value: 1, color: "#F97316" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Updated Header with consistent design */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <Header />
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Status Breakdown */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Status breakdown
            </h3>
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-gray-900">4</div>
                  <div className="text-sm text-gray-600">Total</div>
                </div>
                <div className="space-y-3">
                  {statusData.map((item, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <div
                        className="w-3 h-3 rounded-full mr-3"
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span className="text-gray-700">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1 flex justify-center">
                {/* CSS Donut Chart */}
                <div className="relative w-40 h-40">
                  {/* Outer circle segments */}
                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    <div className="w-full h-full relative">
                      {/* Wishlist - Blue - 25% */}
                      <div
                        className="absolute w-full h-full rounded-full"
                        style={{
                          background: `conic-gradient(#3B82F6 0deg 90deg, transparent 90deg)`,
                        }}
                      />
                      {/* Applied - Green - 25% */}
                      <div
                        className="absolute w-full h-full rounded-full"
                        style={{
                          background: `conic-gradient(transparent 0deg 90deg, #10B981 90deg 180deg, transparent 180deg)`,
                        }}
                      />
                      {/* Ghosted - Gray - 25% */}
                      <div
                        className="absolute w-full h-full rounded-full"
                        style={{
                          background: `conic-gradient(transparent 0deg 180deg, #6B7280 180deg 270deg, transparent 270deg)`,
                        }}
                      />
                      {/* Follow up - Orange - 25% */}
                      <div
                        className="absolute w-full h-full rounded-full"
                        style={{
                          background: `conic-gradient(transparent 0deg 270deg, #F97316 270deg 360deg)`,
                        }}
                      />
                    </div>
                  </div>
                  {/* Inner white circle to create donut effect */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Where do you apply jobs from */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Where do you apply jobs from?
            </h3>
            <div className="space-y-4">
              {jobSourceData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div
                      className="w-4 h-4 rounded mr-3"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="text-gray-700 text-sm">{item.name}</span>
                  </div>
                  <span className="text-gray-900 font-semibold">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Jobs by Column Bar Chart (bottom right) */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Jobs by Column
            </h3>
            <div className="flex items-end justify-between h-48 px-2">
              {columnData.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center flex-1 max-w-12"
                >
                  <div className="text-xs text-gray-600 mb-2 font-medium">
                    {item.value}
                  </div>
                  <div
                    className="w-6 rounded-t-md mb-2"
                    style={{
                      backgroundColor: item.color,
                      height: `${(item.value / 2) * 150}px`, // Max height 150px for value 2
                    }}
                  ></div>
                  <div className="text-xs text-gray-600 text-center transform -rotate-45 origin-center w-12 mt-2">
                    {item.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Empty box (bottom left) */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            {/* This box is empty as per design */}
          </div>
        </div>
      </div>
    </div>
  );
}
