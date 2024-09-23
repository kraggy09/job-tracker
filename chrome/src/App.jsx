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

  // If token is found, render the main content (the h1 tag)
  return (
    <div className="min-w-[500px]">
      <h1 className="text-xl font-bold text-center">Job Tracker</h1>
    </div>
  );
};

export default App;
