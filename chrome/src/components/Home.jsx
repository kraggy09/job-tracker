const Home = () => {
  const handleAddJob = async () => {
    chrome.runtime.sendMessage({ action: "addJob" }, async (response) => {
      if (response && response.selectedDOM) {
        console.log("Response from background.js:", response);
        await postData(response);
      } else if (response.error) {
        console.error("Error:", response.error);
        alert(response.error);
      }
    });
  };

  async function postData() {
    // Function to send data to the backend API
  }

  return (
    <div className="min-w-[500px]">
      <h1 className="text-xl font-bold text-center">Job Tracker</h1>
      <button
        className="px-4 py-2 mt-4 bg-green-500 text-white rounded"
        onClick={handleAddJob}
      >
        Add Current Job
      </button>
    </div>
  );
};

export default Home;
