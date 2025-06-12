import React, { useState, useMemo } from "react";
import { statusOptions, initialJobs } from "../components_JobTracker/jobData";

import Filters from "../components_JobTracker/Filters";
import StatusCards from "../components_JobTracker/StatusCards";
import JobsTable from "../components_JobTracker/JobsTable";
import AddJobModal from "../components_JobTracker/AddJobModal";
import ShareModal from "../components_JobTracker/ShareModal";

const JobTracker = () => {
  const [jobs, setJobs] = useState(initialJobs);
  const [filterText, setFilterText] = useState("");
  const [selectedPosition, setSelectedPosition] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  // CHANGE: Added state to control ShareModal visibility
  const [showShareModal, setShowShareModal] = useState(false);
  const [newJob, setNewJob] = useState({
    position: "",
    company: "",
    salary: "",
    location: "",
    status: "BOOKMARKED",
    dateApplied: "",
    interviewDate: "",
    followUp: "N/A",
    jobType: "",
    url: "",
    description: "",
  });

  const uniquePositions = useMemo(() => {
    return [...new Set(jobs.map((job) => job.position))];
  }, [jobs]);

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesSearch =
        job.position.toLowerCase().includes(filterText.toLowerCase()) ||
        job.company.toLowerCase().includes(filterText.toLowerCase());
      const matchesPosition =
        selectedPosition === "" || job.position === selectedPosition;
      return matchesSearch && matchesPosition;
    });
  }, [jobs, filterText, selectedPosition]);

  const statusCounts = useMemo(() => {
    const counts = {};
    statusOptions.forEach((status) => {
      counts[status.key] = jobs.filter(
        (job) => job.status === status.key
      ).length;
    });
    return counts;
  }, [jobs]);

  const handleAddJob = (jobToSave) => {
    if (jobToSave.position && jobToSave.company) {
      const jobToAdd = {
        ...jobToSave,
        id: jobs.length + 1,
        dateApplied:
          jobToSave.dateApplied ||
          new Date()
            .toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })
            .toUpperCase(),
      };
      setJobs([...jobs, jobToAdd]);
      setNewJob({
        position: "",
        company: "",
        salary: "",
        location: "",
        status: "BOOKMARKED",
        dateApplied: "",
        interviewDate: "",
        followUp: "N/A",
        jobType: "",
        url: "",
        description: "",
      });
      setShowAddModal(false);
    }
  };

  return (
    <div className="h-screen bg-gray-100 flex overflow-hidden">
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* CHANGE: Pass setShowShareModal to Filters to enable ShareModal trigger */}
        <Filters
          filterText={filterText}
          setFilterText={setFilterText}
          selectedPosition={selectedPosition}
          setSelectedPosition={setSelectedPosition}
          uniquePositions={uniquePositions}
          setShowAddModal={setShowAddModal}
          setShowShareModal={setShowShareModal}
        />
        <StatusCards
          statusOptions={statusOptions}
          statusCounts={statusCounts}
        />
        <JobsTable
          filteredJobs={filteredJobs}
          statusOptions={statusOptions}
          setJobs={setJobs}
        />
        <AddJobModal
          isOpen={showAddModal}
          onClose={() => setShowAddModal(false)}
          onSave={handleAddJob}
          newJob={newJob}
          setNewJob={setNewJob}
          statusOptions={statusOptions}
        />
        {/* CHANGE: Added ShareModal to display when Share button is clicked */}
        <ShareModal
          isOpen={showShareModal}
          onClose={() => {
            console.log("Closing ShareModal"); // Debug log
            setShowShareModal(false);
          }}
        />
      </div>
    </div>
  );
};

export default JobTracker;
