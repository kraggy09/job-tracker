import React, { useState } from 'react';

const jobStatus = ['BOOKMARKED', 'APPLIED', 'INTERVIEWING', 'ACCEPTED', 'REJECTED'];

const initalJobs = [
  {
    id: 1,
    position: 'Software Engineer',
    company: 'Google',
    location: 'Bangalore',
    maxSalary: 500000,
    status: 'APPLIED',
    dateApplied: '23/09/2024',
  },
  {
    id: 2,
    position: 'FrontEnd Developer',
    company: 'Microsoft',
    location: 'Hyderabad',
    maxSalary: 800000,
    status: 'BOOKMARKED',
    dateApplied: '21/09/2024',
  },
  {
    id: 3,
    position: 'FrontEnd Developer',
    company: 'IBM',
    location: 'Kolkata',
    maxSalary: 400000,
    status: 'INTERVIEWING',
    dateApplied: '15/08/2024',
  },
];

function JobTracker() {
  const [jobs, setJobs] = useState(initalJobs);
  const [filter, setFilter] = useState('ALL');
  const [editJobId, setEditJobId] = useState(null);
  const [editJob, setEditJob] = useState({});

  // filter Jobs
  let filterJobs;
  if (filter === 'ALL') {
    filterJobs = jobs;
  } else {
    filterJobs = jobs.filter(job => job.status === filter);
  }

  // Edit Job
  const handleEditJob = (job) => {
    setEditJobId(job.id);
    setEditJob({ ...job });

  };

  // Save Job
  const handleSaveJob = () => {
    setJobs((prevJobs) =>
      prevJobs.map((job) => (job.id === editJob.id ? editJob : job))
    );
    setEditJobId(null);
    setEditJob({});
  };

  // Cancel Job
  const handleCancelJob = () => {
    setEditJobId(null);
    setEditJob({});
  };

  // Delete Job
  const handleDeleteJob = (id) => {
    setJobs((prevJobs) => (prevJobs.filter((job) => job.id !== id))
    );
  }

    const handleFieldChange =(e) => {
      const {name, value} = e.target;
      setEditJob((prevEditJob) =>({
        ...prevEditJob,
        [name]: value,
      }));
    };

    const renderField = (value, field, id) => {
      if (editJobId === id) {
        if (field === 'status') {
          return (
            <select name={field} value={editJob[field]} onChange={handleFieldChange}>
              {jobStatus.map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
          );
        }
        return (
          <input
            type={field === 'maxSalary' ? 'number' : 'text'}
            name={field}
            value={editJob[field]}
            onChange={handleFieldChange}
          />
        );

      }
      return value;
    };

  return (
    <div className='p-5 h-screen bg-gray-100'>
      <h1 className='text-4xl mb-4 font-semibold'>Job Application Tracker</h1>
      <div className='mb-4 flex justify-between items-center'>
        <div className='flex space-x-2'>
          <button
            className={`px-3 py-1 rounded ${filter === 'ALL' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setFilter('ALL')}
          >
            ALL
          </button>
          {jobStatus.map(status => (
            <button
              key={status}
              className={`px-3 py-1 rounded ${filter === status ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              onClick={() => setFilter(status)}
            >
              {status}
            </button>
          ))}
        </div>
      </div>
      <div className='overflow-auto rounded-lg shadow-lg'>
        <table className='w-full leading-normal'>
          <thead className='bg-gray-50 border-b-2 border-gray-200'>
            <tr>
              <th className='w-20 p-4 text-xs font-semibold text-left text-gray-600 uppercase tracking-wider'>
                No.
              </th>
              <th className='w-32 p-4 text-xs font-semibold text-left text-gray-600 uppercase tracking-wider'>
                Position
              </th>
              <th className='w-32 p-4 text-xs font-semibold text-left text-gray-600 uppercase tracking-wider'>
                Company
              </th>
              <th className='w-32 p-4 text-xs font-semibold text-left text-gray-600 uppercase tracking-wider'>
                Location
              </th>
              <th className='w-32 p-4 text-xs font-semibold text-left text-gray-600 uppercase tracking-wider'>
                Salary
              </th>
              <th className='w-32 p-4 text-xs font-semibold text-left text-gray-600 uppercase tracking-wider'>
                Status
              </th>
              <th className='w-32 p-4 text-xs font-semibold text-left text-gray-600 uppercase tracking-wider'>
                Date Applied
              </th>
              <th className='w-32 p-4 text-xs font-semibold text-left text-gray-600 uppercase tracking-wider'>
                Actions
              </th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200'>
            {filterJobs.map((job) => (
              <tr key={job.id} className='hover:bg-gray-100 transition duration-150 ease-in-out'>
                <td className='p-4 text-sm text-gray-800 text-left whitespace-nowrap'>
                  <a href='#' className='font-bold text-blue-500 hover:underline'>
                    {renderField(job.id, 'id', job.id)}
                  </a>
                </td>
                <td className='p-4 text-sm text-gray-800 text-left whitespace-nowrap'>
                  {renderField( job.position, 'position', job.id)}
                </td>
                <td className='p-4 text-sm text-gray-800 text-left whitespace-nowrap'>
                  {renderField( job.company, 'company', job.id)}
                </td>
                <td className='p-4 text-sm text-gray-800 text-left whitespace-nowrap'>
                  {renderField( job.location, 'location', job.id)}
                </td>
                <td className='p-4 text-sm text-gray-800 text-left whitespace-nowrap'>
                  {renderField( job.maxSalary, 'maxSalary', job.id)}
                </td>
                <td className='p-4 text-sm text-gray-800 text-left whitespace-nowrap'>
                  {renderField( job.status, 'status', job.id)}
                </td>
                <td className='p-4 text-sm text-gray-800 text-left whitespace-nowrap'>
                  {renderField( job.dateApplied, 'dateApplied', job.id)}
                </td>

                <td className='p-4 text-sm text-gray-800 text-left'>
                  {editJobId === job.id ? (
                    <>
                      <button onClick={handleSaveJob} className='text-blue-500  font-bold mr-2 hover:underline'>Save</button>
                      <button onClick={handleCancelJob} className='text-blue-500  font-bold mr-2 hover:underline'>Cancel</button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => handleEditJob(job)} className='text-blue-500  font-bold mr-2 hover:underline'>Edit</button>
                      <button onClick={() => handleDeleteJob(job.id)} className='text-blue-500  font-bold mr-2 hover:underline'>Delete</button>
                    </>
                  )}

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

  );
}

export default JobTracker;
