import { useEffect, useState } from "react";

const App = () => {
  const [token, setToken] = useState(null);

  // Check if token exists in chrome.storage.local
  useEffect(() => {
    chrome.storage.local.get(["token"], (result) => {
      if (result.token) {
        setToken(result.token); // Token found, set it
      } else {
        setToken(null); // Token not found, show login
      }
    });
  }, []);

  // Function to handle login (adds token to chrome.storage.local)
  const handleLogin = () => {
    const newToken = "sample_token_value"; // This would be your real token
    chrome.storage.local.set({ token: newToken }, () => {
      setToken(newToken); // Update state to reflect token is stored
      console.log("Token stored:", newToken);
    });
  };

  // Function to send a message to background.js when adding the current job
  const handleAddJob = async () => {
    chrome.runtime.sendMessage({ action: "addJob" }, async (response) => {
      if (response && response.selectedDOM) {
        console.log("Response from background.js:", response);
        await postData(response);
      } else if (response.error) {
        console.error("Error:", response.error);
        alert(response.error); // Notify the user about the error
      }
    });
  };

  async function postData() {
    // function to go to api and save data by managing it with gemini ai api
  }
  // If token is not found, render the login page
  if (!token) {
    return (
      <div className="min-w-[500px]">
        <h1 className="text-xl font-bold text-center">Login Page</h1>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    );
  }

  // If token is found, render the main content and the "Add Job" button
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

export default App;
