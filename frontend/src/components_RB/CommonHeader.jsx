import React from 'react';

const CommonHeader = ({ title }) => {
  return (
    <div className="flex justify-between items-center mb-6 border-b border-gray-200 pb-4 px-6">
      <h1 className="text-xl font-bold text-gray-900">{title}</h1>
      <div className="flex items-center space-x-4">
        <button className="relative p-3 rounded-full bg-white shadow-md hover:bg-gray-100 transition duration-200 ease-in-out">
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 17h5l-1.405-1.405M19 13V9a7 7 0 10-14 0v4l-1.405 1.405A1 1 0 005 17h5m4 0h2"
            />
          </svg>
          <span className="absolute -top-0.5 -right-0.5 flex items-center justify-center w-4 h-4 text-[10px] font-bold text-white bg-red-500 rounded-full shadow">
            3
          </span>
        </button>
        <img
          src="https://icons.veryicon.com/png/o/miscellaneous/standard/avatar-15.png"
          className="w-10 h-10 rounded-full border border-gray-200 shadow-sm hover:shadow-md transition duration-200 ease-in-out"
          alt="User Avatar"
        />
      </div>
    </div>
  );
};

export default CommonHeader;