export const statusOptions = [
  { key: "BOOKMARKED", label: "BOOKMARKED", color: "bg-red-400", count: 0 },
  { key: "APPLIED", label: "APPLIED", color: "bg-yellow-400", count: 0 },
  {
    key: "INTERVIEWING",
    label: "INTERVIEWING",
    color: "bg-green-400",
    count: 0,
  },
  { key: "ACCEPTED", label: "ACCEPTED", color: "bg-blue-400", count: 0 },
  { key: "REJECTED", label: "REJECTED", color: "bg-red-500", count: 0 },
  { key: "FOLLOW UP", label: "FOLLOW UP", color: "bg-purple-400", count: 0 },
];

export const initialJobs = [
  {
    id: 1,
    position: "Software Developer",
    company: "NASA",
    salary: "99,00,000",
    location: "Washington, USA",
    status: "ACCEPTED",
    dateApplied: "APRIL 23, 2025",
    interviewDate: "MAY 22, 2025",
    followUp: "N/A",
  },
  {
    id: 2,
    position: "Full Stack",
    company: "Infurikto",
    salary: "12,00,000",
    location: "Bangalore, India",
    status: "INTERVIEWING",
    dateApplied: "APRIL 23, 2025",
    interviewDate: "MAY 22, 2025",
    followUp: "N/A",
  },
];
