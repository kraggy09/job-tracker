// import React from "react";
// import { Search, Plus, Share2 } from "lucide-react";

// const Filters = ({
//   filterText,
//   setFilterText,
//   selectedPosition,
//   setSelectedPosition,
//   uniquePositions,
//   setShowAddModal,
// }) => {
//   return (
//     <div className="bg-white border-b border-gray-200 px-6 py-4">
//       <div className="flex items-center justify-between">
//         <div className="flex items-center space-x-4">
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Filter"
//               value={filterText}
//               onChange={(e) => setFilterText(e.target.value)}
//               className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent pl-10"
//             />
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
//           </div>
//           <select
//             value={selectedPosition}
//             onChange={(e) => setSelectedPosition(e.target.value)}
//             className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//           >
//             <option value="">Company</option>
//             {uniquePositions.map((position) => (
//               <option key={position} value={position}>
//                 {position}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div className="flex items-center space-x-2">
//           <button
//             onClick={() => setShowAddModal(true)}
//             className="bg-black text-white px-4 py-2 rounded-lg text-sm flex items-center space-x-2 hover:bg-gray-800"
//           >
//             <Plus className="w-4 h-4" />
//             <span>Add Job</span>
//           </button>
//           <button className="bg-black text-white px-4 py-2 rounded-lg text-sm flex items-center space-x-2 hover:bg-gray-800">
//             <Share2 className="w-4 h-4" />
//             <span>Share</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Filters;

import React from "react";
import { Search, Plus, Share2 } from "lucide-react";

const Filters = ({
  filterText,
  setFilterText,
  selectedPosition,
  setSelectedPosition,
  uniquePositions,
  setShowAddModal,
  setShowShareModal,
}) => {
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Filter"
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent pl-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
          <select
            value={selectedPosition}
            onChange={(e) => setSelectedPosition(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Company</option>
            {uniquePositions.map((position) => (
              <option key={position} value={position}>
                {position}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-black text-white px-4 py-2 rounded-lg text-sm flex items-center space-x-2 hover:bg-gray-800"
          >
            <Plus className="w-4 h-4" />
            <span>Add Job</span>
          </button>
          <button
            onClick={() => {
              console.log("Share button clicked"); // Debug log
              setShowShareModal(true);
            }}
            className="bg-black text-white px-4 py-2 rounded-lg text-sm flex items-center space-x-2 hover:bg-gray-800"
          >
            <Share2 className="w-4 h-4" />
            <span>Share</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
