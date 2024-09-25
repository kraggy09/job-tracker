import { useState } from "react";
import { HiBriefcase } from "react-icons/hi2";
import PropTypes from "prop-types";
import toast from "react-hot-toast";
import { apiUrl } from "../constant";
import axios from "axios";

const Login = ({ setToken, setIsNewUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post(apiUrl + "user/login", {
        email: email,
        password: password,
      });

      if (res.data && res.data.token) {
        const newToken = res.data.token; // Retrieve token from response
        const newUser = res.data.user; // Assuming the user data is also returned in the response

        // Set token in local storage
        chrome.storage.local.set({ token: newToken }, () => {
          setToken(newToken); // Set token and switch to home page
        });

        // Set user data in local storage
        if (newUser) {
          chrome.storage.local.set({ user: newUser }, () => {
            console.log("User data saved successfully", newUser);
          });
        }

        toast.success("Login successful!");
      } else {
        const err =
          res.data.response?.data?.msg || "Login failed. Please try again.";
        console.log(err);
        toast.error(err);
      }
    } catch (error) {
      console.log("Login error:", error);
      toast.error(
        error.response?.data?.msg || "Login failed. Please try again."
      );
    }
  };

  return (
    <main className="flex items-center gap-y-3 justify-center min-h-[100vh] flex-col">
      <h1 className="text-3xl flex my-5 items-center justify-center gap-x-3 font-bold">
        <HiBriefcase />
        CareerScout
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
          required
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-3 py-2 text-lg border border-gray-400 rounded-lg"
        />
        <input
          required
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

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
  setIsNewUser: PropTypes.bool.isRequired,
};

export default Login;
