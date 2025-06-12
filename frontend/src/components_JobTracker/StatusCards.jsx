// import React from "react";

// const StatusCards = ({ statusOptions, statusCounts }) => {
//   return (
//     <div className="bg-white px-6 py-4">
//       <div className="flex space-x-1">
//         {statusOptions.map((status, index) => (
//           <div
//             key={status.key}
//             className={`${status.color} rounded-lg px-4 py-3 text-white text-center flex-1 relative`}
//           >
//             <div className="text-xl font-bold">{statusCounts[status.key]}</div>
//             <div className="text-xs font-medium">{status.label}</div>
//             {index < statusOptions.length - 1 && (
//               <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2">
//                 <div className="w-0 h-0 border-l-8 border-r-8 border-t-4 border-b-4 border-l-transparent border-r-white border-t-transparent border-b-transparent"></div>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default StatusCards;

import React from "react";

const StatusCards = ({ statusOptions, statusCounts }) => {
  // Tailwind color classes matching your UI
  const statusColors = {
    BOOKMARKED: "bg-red-500", // Red
    APPLIED: "bg-yellow-400", // Yellow
    INTERVIEWING: "bg-green-500", // Green
    ACCEPTED: "bg-blue-400", // Blue
    REJECTED: "bg-red-700", // Dark Red
    FOLLOWUP: "bg-blue-500", // Purple
  };

  return (
    <div className="p-6 bg-gray-100">
      {/* Hidden div to prevent Tailwind from purging dynamic colors */}
      <div className="hidden">
        <div className="bg-red-500 bg-yellow-400 bg-green-500 bg-blue-400 bg-red-700 bg-blue-500" />
      </div>

      <div className="flex flex-wrap gap-6">
        {statusOptions.map((status) => (
          <div
            key={status.key}
            className={`rounded-lg shadow border border-gray-200 p-6 w-48 h-32 flex justify-between items-center text-white ${
              statusColors[status.key] || "bg-gray-300"
            }`}
          >
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold">{status.label}</h3>
              <p className="text-3xl font-bold">
                {statusCounts?.[status.key] ?? 0}
              </p>
            </div>
            <div className="flex items-center">
              <svg
                className="w-6 h-6 text-white hover:text-gray-200 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatusCards;
