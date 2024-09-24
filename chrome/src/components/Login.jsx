import { useState } from "react";
import { HiBriefcase } from "react-icons/hi2";

const Login = ({ setToken, setIsNewUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const newToken = "sample_token_value"; // Simulate token retrieval from API
    chrome.storage.local.set({ token: newToken }, () => {
      setToken(newToken); // Set token and switch to home page
    });
  };

  return (
    <main className="flex items-center gap-y-3 justify-center min-h-[100vh] flex-col">
      <h1 className="text-3xl flex my-5 items-center justify-center gap-x-3 font-bold">
        <HiBriefcase />
        Job Tracker
      </h1>
      <h1 className="text-2xl font-semibold">Login</h1>
      <form
        className="flex flex-col gap-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-3 py-2 text-lg border border-gray-400 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="px-3 py-2 text-lg border border-gray-400 rounded-lg"
        />
        <button className="bg-black hover:scale-105 duration-200 ease-linear text-white py-2 rounded-lg">
          Login
        </button>
      </form>
      <button
        className="underline text-lg hover:text-blue-700 mt-4"
        onClick={() => setIsNewUser(true)} // Switch to signup page
      >
        New user? Sign up here.
      </button>
    </main>
  );
};

export default Login;
