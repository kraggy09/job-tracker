import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";

const App = () => {
  const [token, setToken] = useState(null);
  const [isNewUser, setIsNewUser] = useState(false); // Manage whether the user is signing up or logging in

  // Check token on initial load
  useEffect(() => {
    chrome.storage.local.get(["token"], (result) => {
      if (result.token) {
        setToken(result.token); // Token found, user is logged in
      } else {
        setToken(null); // No token, user needs to login
      }
    });
  }, []);

  // Function to render the appropriate view based on the state
  const renderPage = () => {
    // If no token, show either login or signup page
    if (!token) {
      return isNewUser ? (
        <Signup setToken={setToken} setIsNewUser={setIsNewUser} />
      ) : (
        <Login setToken={setToken} setIsNewUser={setIsNewUser} />
      );
    }

    // If token is present, show the Home page
    return <Home setToken={setToken} />;
  };

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      {renderPage()}
    </div>
  );
};

export default App;
