import React, { useState, useRef, useEffect } from 'react';
import JobsList from './JobsList';
import JobData from './JobData';
import { FaSearch, FaChevronDown } from 'react-icons/fa';

const JobPanel = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [matchScore, setMatchScore] = useState(null);
  const [isMatched, setIsMatched] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownStyle, setDropdownStyle] = useState({});
  const selectRef = useRef(null);

  const handleJobSelect = (job) => {
    setSelectedJob(job);
    setMatchScore(null);
    setIsMatched(false);
    setIsDropdownOpen(false);
  };

  const handleMatchResume = () => {
    if (selectedJob) {
      const matchedSkills = selectedJob.skills.filter(skill => skill.matched).length;
      const totalSkills = selectedJob.skills.length;
      const score = Math.round((matchedSkills / totalSkills) * 100);
      setMatchScore(score);
      setIsMatched(true);
    }
  };

  useEffect(() => {
    if (isDropdownOpen && selectRef.current) {
      const rect = selectRef.current.getBoundingClientRect();
      setDropdownStyle({
        top: `${rect.bottom + window.scrollY + 8}px`, // 0.5rem gap (8px)
        left: `${rect.left + window.scrollX}px`,
        width: `${rect.width}px`,
      });
    }
  }, [isDropdownOpen]);

  return (
    <div className="flex h-[calc(100vh)] bg-gray-50">
      {/* Job Panel (Middle Column) */}
      <div className="w-[600px] flex flex-col p-6 overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg">Template</button>
            <button className="px-3 py-1 bg-black text-white rounded-lg">Job Match</button>
          </div>
          <div className="text-gray-600">Resume Score: {(matchScore || 0).toFixed(1)}%</div>
        </div>

        {/* Title */}
        <h1 className="text-xl font-bold text-gray-800 mb-4">Match your resume to the job</h1>

        {/* Search/Select Job Section */}
        <div className="mb-6">
          <div>
            <div
              ref={selectRef}
              className="flex items-center p-3 bg-white border border-gray-300 rounded-lg cursor-pointer"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <FaSearch className="mr-2 text-gray-500" />
              <span className="flex-1 text-gray-600">
                {selectedJob ? `${selectedJob.title} - ${selectedJob.company} (${selectedJob.location})` : 'Select a job to match against'}
              </span>
              <FaChevronDown className="text-gray-500" />
            </div>
            {isDropdownOpen && (
              <div
                className="fixed bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto z-10"
                style={dropdownStyle}
              >
                {JobsList.map(job => (
                  <div
                    key={job.id}
                    className="p-3 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleJobSelect(job)}
                  >
                    {job.title} - {job.company} ({job.location})
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Match My Resume Button (only if a job is selected) */}
        {selectedJob && (
          <div className="mb-6">
            <button
              onClick={handleMatchResume}
              className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Match My Resume
            </button>
          </div>
        )}

        {/* Job Data Display */}
        <JobData job={selectedJob} matchScore={matchScore} isMatched={isMatched} />
      </div>

      {/* Resume Preview (Right Column) */}
      {/* <div className="flex-1 bg-gray-200 p-4">
        <h2 className="text-lg font-bold mb-4">Resume Preview</h2>
        <p className="text-gray-600">This is a placeholder for the resume preview.</p>
      </div> */}
    </div>
  );
};

export default JobPanel;