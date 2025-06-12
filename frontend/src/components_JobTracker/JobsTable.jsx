import React from "react";
import { MoreHorizontal } from "lucide-react";

const JobsTable = ({ filteredJobs, statusOptions, setJobs }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "BOOKMARKED":
        return "bg-red-100 text-red-800";
      case "APPLIED":
        return "bg-yellow-100 text-yellow-800";
      case "INTERVIEWING":
        return "bg-green-100 text-green-800";
      case "ACCEPTED":
        return "bg-blue-100 text-blue-800";
      case "REJECTED":
        return "bg-red-100 text-red-800";
      case "FOLLOW UP":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleStatusChange = (jobId, newStatus) => {
    setJobs((prevJobs) =>
      prevJobs.map((job) =>
        job.id === jobId ? { ...job, status: newStatus } : job
      )
    );
  };

  return (
    <div className="flex-1 bg-white mx-6 mb-6 rounded-lg shadow-sm overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50 border-b border-gray-200">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <input type="checkbox" className="rounded border-gray-300" />
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              JOB POSITION
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              COMPANY
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              SALARY
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              LOCATION
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              STATUS
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              DATE APPLIED
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              INTERVIEW DATE
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              FOLLOW UP
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <MoreHorizontal className="w-4 h-4" />
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {filteredJobs.map((job) => (
            <tr key={job.id} className="hover:bg-gray-50">
              <td className="px-4 py-4 whitespace-nowrap">
                <input type="checkbox" className="rounded border-gray-300" />
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">
                  {job.position}
                </div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{job.company}</div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{job.salary}</div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{job.location}</div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <select
                  value={job.status}
                  onChange={(e) => handleStatusChange(job.id, e.target.value)}
                  className={`px-2 py-1 text-xs font-medium rounded-md border-0 ${getStatusColor(
                    job.status
                  )}`}
                >
                  {statusOptions.map((option) => (
                    <option key={option.key} value={option.key}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                {job.dateApplied}
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                {job.interviewDate}
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                {job.followUp}
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </td>
            </tr>
          ))}
          {Array.from({
            length: Math.max(0, 10 - filteredJobs.length),
          }).map((_, index) => (
            <tr key={`empty-${index}`} className="h-16">
              <td className="px-4 py-4"></td>
              <td className="px-4 py-4"></td>
              <td className="px-4 py-4"></td>
              <td className="px-4 py-4"></td>
              <td className="px-4 py-4"></td>
              <td className="px-4 py-4"></td>
              <td className="px-4 py-4"></td>
              <td className="px-4 py-4"></td>
              <td className="px-4 py-4"></td>
              <td className="px-4 py-4"></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobsTable;
