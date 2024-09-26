import { useState, useEffect } from "react";

import { HiBriefcase } from "react-icons/hi2";
import { TfiReload } from "react-icons/tfi";
import LinkedInIcon from "../Icons/LinkedInIcon";
import WellFoundIcon from "../Icons/WellfoundIcon";
import IndeedIcon from "../Icons/IndeedIcon";
import NaukriIcon from "../Icons/NaukriIcon";
import GlassDoorIcon from "../Icons/GlassDoorIcon";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const jobStatus = [
  { name: "APPLIED", text: "text-white", bg: "bg-black" },
  { name: "INTERVIEWING", text: "text-yellow-800", bg: "bg-yellow-300" },
  { name: "ACCEPTED", text: "text-green-800", bg: "bg-green-400" },
  { name: "REJECTED", text: "text-red-800", bg: "bg-red-300" },
];

const initialJobs = [
  {
    id: 1,
    position: "Software Engineer Intern",
    company: "Google",
    location: "Bangalore",
    maxSalary: 500000,
    status: "APPLIED",
    dateApplied: "23/09/2024",
    platform: "LinkedIn", // Add platform here
  },
  {
    id: 2,
    position: "FrontEnd Developer",
    company: "Microsoft",
    location: "Hyderabad",
    maxSalary: 800000,
    status: "ACCEPTED",
    dateApplied: "21/09/2024",
    platform: "Naukri", // Add platform here
  },
  {
    id: 3,
    position: "Backend Developer",
    company: "Amazon",
    location: "Chennai",
    maxSalary: 900000,
    status: "INTERVIEWING",
    dateApplied: "10/09/2024",
    platform: "Indeed", // Add platform here
  },
  {
    id: 4,
    position: "Full Stack Developer",
    company: "Facebook",
    location: "Mumbai",
    maxSalary: 700000,
    status: "REJECTED",
    dateApplied: "05/09/2024",
    platform: "Wellfound", // Add platform here
  },
  {
    id: 5,
    position: "Data Scientist",
    company: "IBM",
    location: "Kolkata",
    maxSalary: 600000,
    status: "APPLIED",
    dateApplied: "22/09/2024",
    platform: "LinkedIn", // Add platform here
  },
  {
    id: 6,
    position: "Machine Learning Engineer",
    company: "Tesla",
    location: "Pune",
    maxSalary: 1100000,
    status: "INTERVIEWING",
    dateApplied: "17/09/2024",
    platform: "Naukri", // Add platform here
  },
  {
    id: 7,
    position: "DevOps Engineer",
    company: "Netflix",
    location: "Delhi",
    maxSalary: 1200000,
    status: "ACCEPTED",
    dateApplied: "15/09/2024",
    platform: "Indeed", // Add platform here
  },
  {
    id: 8,
    position: "System Administrator",
    company: "Adobe",
    location: "Bangalore",
    maxSalary: 400000,
    status: "REJECTED",
    dateApplied: "12/09/2024",
    platform: "Wellfound", // Add platform here
  },
  {
    id: 9,
    position: "Frontend Engineer",
    company: "Flipkart",
    location: "Chennai",
    maxSalary: 750000,
    status: "INTERVIEWING",
    dateApplied: "18/09/2024",
    platform: "LinkedIn", // Add platform here
  },
  {
    id: 10,
    position: "Software Developer",
    company: "TCS",
    location: "Mumbai",
    maxSalary: 550000,
    status: "APPLIED",
    dateApplied: "24/09/2024",
    platform: "Glassdoor", // Add platform here
  },
];

function JobTracker() {
  const [jobs, setJobs] = useState(initialJobs);
  const [filter, setFilter] = useState("ALL");
  const [filteredJobs, setFilteredJobs] = useState(initialJobs);
  const [editedJob, setEditedJob] = useState(-1);

  // Update filteredJobs state whenever filter or jobs state changes
  useEffect(() => {
    if (filter === "ALL") {
      setFilteredJobs(initialJobs);
    } else {
      setFilteredJobs(
        jobs.filter((job) => job.status.toLowerCase() === filter.toLowerCase())
      );
    }
  }, [filter, jobs]);
  useEffect(() => {}, []);

  return (
    <div className="p-5 bg-gray-100">
      <h1 className="lg:text-4xl flex items-center justify-center gap-x-2 text-2xl mbx-4 py-3 font-semibold">
        <HiBriefcase /> CareerScout
      </h1>
      <div className="mbx-4  flex justify-between flex-col gap-yx-4 py-3 text-sm lg:text-lg  md:flex-row">
        <div className="flex min-w-[80vw]  border-b-2 items-center">
          <button
            className={`md:px-6 px-2 py-1 rounded-t-2xl ${
              filter === "ALL" ? "bg-black text-white" : "bg-gray-200"
            }`}
            onClick={() => setFilter("ALL")}
          >
            ALL
          </button>
          {jobStatus.map((job) => (
            <button
              key={job.name}
              className={`md:px-6 px-2 py-1 rounded-t-2xl ${
                filter === job.name ? job.bg + " " + job.text : "bg-gray-200"
              }`}
              onClick={() => setFilter(job.name)}
            >
              {job.name}
            </button>
          ))}
        </div>
        <button className="bg-black text-white flex items-center justify-center gap-x-2 px-4  py-1 rounded-lg text-xl  md:rounded-xl">
          <TfiReload className="hover:animate-spin" /> Refresh
        </button>
      </div>
      <div className="overflow-auto min-h-[80vh] text-sm rounded-lg shadow-lg">
        <table className="w-full   leading-normal">
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th className="w-20 px-4 py-3  font-semibold text-center text-gray-600 uppercase tracking-wider">
                No.
              </th>

              <th className="px-4 py-3  font-semibold text-center text-gray-600 uppercase tracking-wider">
                Position
              </th>
              <th className="px-4 py-3  font-semibold text-center text-gray-600 uppercase tracking-wider">
                Company
              </th>
              <th className="px-4 py-3  font-semibold text-center text-gray-600 uppercase tracking-wider">
                Salary
              </th>
              <th className="px-4 py-3   font-semibold text-center text-gray-600 uppercase">
                Date Applied
              </th>

              <th className="md:max-w-16  px-4 py-3  font-semibold text-left text-gray-600 uppercase tracking-wider">
                Platform
              </th>
              <th className="px-4 py-3  font-semibold text-center text-gray-600 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredJobs === null ? (
              <>Loading....</>
            ) : (
              filteredJobs.map((job) => (
                <tr
                  key={job.id}
                  className="hover:bg-gray-100 transition duration-150 ease-in-out"
                >
                  <td className="px-4 py-3 text-sm  text-gray-800 text-center ">
                    <a
                      href="#"
                      className="font-bold text-blue-500 hover:underline"
                    >
                      {job.id}
                    </a>
                  </td>

                  <td className="px-4 py-3 text-sm max-w-40 text-gray-800 text-center ">
                    {job.position}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-800 text-center ">
                    {job.company}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-800 text-center ">
                    {job.maxSalary}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-800 text-center ">
                    {job.dateApplied}
                  </td>

                  <td className="px-4 flex items-center justify-start py-3 text-sm text-gray-800 text-center ">
                    {job.platform.toLowerCase() === "naukri" ? (
                      <NaukriIcon />
                    ) : job.platform.toLowerCase() === "indeed" ? (
                      <IndeedIcon />
                    ) : job.platform.toLowerCase() === "wellfound" ? (
                      <WellFoundIcon />
                    ) : job.platform.toLowerCase() === "linkedin" ? (
                      <LinkedInIcon />
                    ) : (
                      <GlassDoorIcon />
                    )}
                  </td>
                  <td
                    onClick={() => {
                      if (editedJob === job.id) {
                        setEditedJob(-1);
                      } else {
                        setEditedJob(job.id);
                      }
                    }}
                    className={`px-4 hover:cursor-pointer relative  py-3 text-sm max-w-40 text-center ${
                      job.status.toLowerCase() === "interviewing"
                        ? "bg-yellow-300 text-yellow-800"
                        : job.status.toLowerCase() === "applied"
                        ? "bg-gray-300 text-black"
                        : job.status.toLowerCase() === "accepted"
                        ? "bg-green-400 text-green-900"
                        : job.status.toLowerCase() === "rejected" &&
                          "bg-red-300 text-red-900"
                    }`}
                  >
                    <div className="md:grid flex items-center justify-center md:grid-cols-8">
                      <p className="col-span-7">{job.status}</p>
                      <MdOutlineKeyboardArrowDown color="black" size={30} />
                    </div>
                    {job.id === editedJob && (
                      <div className="absolute flex py-2 text-black bg-white  z-20 min-w-full left-0  justify-center flex-col  top-12 rounded-lg">
                        {jobStatus
                          .filter(
                            (j) =>
                              j.name.toLowerCase() != job.status.toLowerCase()
                          )
                          .map((j) => {
                            return (
                              <div
                                onClick={() => {
                                  console.log(j.name);
                                }}
                                key={j.name}
                                className={` hover:bg-gray-300 font-semibold py-3 hover::${j.text}`}
                              >
                                {j.name}
                              </div>
                            );
                          })}
                      </div>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default JobTracker;
