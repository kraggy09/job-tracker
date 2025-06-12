const ResumeCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <div className="border p-4 rounded-md">
        <h2 className="font-semibold mb-1">Base Resume</h2>
        <p className="text-sm text-gray-600 mb-2">
          A base resume with a thoughtfully designed, ATS-friendly template...
        </p>
        <button className="text-blue-600 font-medium">Start Building →</button>
      </div>
      <div className="border p-4 rounded-md">
        <h2 className="font-semibold mb-1">Job Tailored Resume</h2>
        <p className="text-sm text-gray-600 mb-2">
          A base resume with a thoughtfully designed, ATS-friendly template...
        </p>
        <button className="text-blue-600 font-medium">
          Create Job Resume →
        </button>
      </div>
    </div>
  );
};

export default ResumeCards;
