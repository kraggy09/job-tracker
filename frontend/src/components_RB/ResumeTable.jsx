import React, { useState } from "react";

const rows = [
  {
    name: "ZunaibKhan_Resume_pdf_BrowserStack",
    score: 78.4,
    created: "about 2 hours ago",
    updated: "about 2 hours ago",
  },
  {
    name: "ZunaibKhan_Resume_pdf",
    score: 85.4,
    created: "2 days ago",
    updated: "about 2 hours ago",
  },
  {
    name: "ZunaibKhan_Sales_pdf",
    score: 55.4,
    created: "2 days ago",
    updated: "about 2 hours ago",
  },
];

const ResumeTable = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRows = rows.filter((row) =>
    row.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mt-6">
      <input
        type="text"
        placeholder="Search resumes by name..."
        className="border px-4 py-2 rounded w-full mb-6 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="overflow-hidden">
        <table className="w-full border-separate border-spacing-y-3">
          <thead>
            <tr className="text-left text-sm text-gray-500">
              <th className="pb-2 px-4">Resume</th>
              <th className="pb-2 px-4">Score</th>
              <th className="pb-2 px-4">Created</th>
              <th className="pb-2 px-4">Last Updated</th>
              <th className="pb-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredRows.map((row, idx) => (
              <tr
                key={idx}
                className="bg-blue-50 hover:bg-blue-100 transition-colors duration-150"
              >
                <td className="py-4 px-4 rounded-l-lg font-medium">
                  {row.name}
                </td>
                <td
                  className={`py-4 px-4 font-semibold ${
                    row.score > 80
                      ? "text-red-500"
                      : row.score > 60
                      ? "text-green-500"
                      : "text-yellow-500"
                  }`}
                >
                  {row.score.toFixed(2)}%
                </td>
                <td className="py-4 px-4 text-gray-600">{row.created}</td>
                <td className="py-4 px-4 text-gray-600">{row.updated}</td>
                <td className="py-4 px-4 rounded-r-lg">
                  <button className="text-xl text-gray-500 hover:text-gray-700 focus:outline-none transition-colors duration-150">
                    ⋮
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResumeTable;
