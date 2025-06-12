import React from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const JobData = ({ job, matchScore, isMatched }) => {
  if (!job) return <div className="text-center text-gray-400 py-8 font-normal">Please select a job to view details</div>;

  return (
    <div className="space-y-10 bg-white p-8 rounded-xl shadow-sm">
      {/* Match Score (if available) */}
      {matchScore !== null && (
        <div className="flex items-center pb-6 border-b border-gray-100">
          <div className="mr-6">
            <div className="relative w-16 h-16">
              <svg className="w-full h-full" viewBox="0 0 36 36">
                <path
                  className="text-gray-200"
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                />
                <path
                  className="text-green-500"
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeDasharray={`${matchScore}, 100`}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-black">
                {matchScore}%
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-black tracking-tight">Skill Match Score</h3>
            <p className="text-sm text-gray-500 mt-1 font-normal">
              {job.skills.filter(skill => skill.matched).length} of {job.skills.length} skills matched
            </p>
          </div>
        </div>
      )}

      {/* Skills */}
      <div className="pb-6 border-b border-gray-100">
        <h3 className="text-xl font-bold text-black tracking-tight mb-5">Required Skills</h3>
        <div className="grid grid-cols-2 gap-4">
          {job.skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center group hover:bg-gray-50 p-2 rounded-lg transition-all duration-200"
            >
              {isMatched && (
                <div className="mr-3">
                  {skill.matched ? (
                    <FaCheckCircle className="text-green-500 group-hover:scale-110 transition-transform duration-200" />
                  ) : (
                    <FaTimesCircle className="text-gray-400 group-hover:scale-110 transition-transform duration-200" />
                  )}
                </div>
              )}
              <span className="text-black text-sm font-medium group-hover:font-semibold transition-all duration-200">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Job Description */}
      <div>
        <h3 className="text-xl font-bold text-black tracking-tight mb-5">Job Description</h3>
        <p className="text-black text-sm font-normal leading-relaxed whitespace-pre-line">
          {job.description}
        </p>
      </div>
    </div>
  );
};

export default JobData;