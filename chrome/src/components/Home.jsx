import { useEffect, useState } from "react";
import { HiBriefcase } from "react-icons/hi2";
import PropTypes from "prop-types";
import toast from "react-hot-toast";
import axios from "axios";
import { apiUrl } from "../constant";

const Home = ({ setToken }) => {
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(false); // State to manage loading

  useEffect(() => {
    // Retrieve user data from local storage
    chrome.storage.local.get("user", (result) => {
      if (result.user) {
        setUserName(result.user.name); // Assuming user object has a 'name' property
      }
    });
  }, []);

  const handleLogout = () => {
    chrome.storage.local.remove(["token", "user"], () => {
      console.log("Token and user removed. User logged out.");
      setToken(null);
      toast.success("Logged out successfully");
    });
  };

  const handleAddJob = async () => {
    setLoading(true); // Start loading
    chrome.runtime.sendMessage({ action: "addJob" }, async (response) => {
      if (response && response.selectedDOM) {
        await postData(response);
      } else if (response.error) {
        console.log("Error:", response.error);
        alert(response.error);
      }
      setLoading(false); // End loading
    });
  };

  async function postData(response) {
    let { jobDetails, platform } = response;
    jobDetails.platform = platform;

    // Retrieve the token from Chrome local storage
    chrome.storage.local.get("token", async (result) => {
      const token = result.token;

      try {
        // Make the POST request with the job details and token
        const res = await axios.post(apiUrl + "jobs/create", {
          job: jobDetails,
          token, // Pass the token in the request body
        });

        // Handle the response if needed
        if (res.data) {
          console.log("Job created successfully:", res.data);
          toast.success("Job added successfully!");
        }
      } catch (error) {
        console.log("Error adding job:", error);
        toast.error(
          error.response?.data?.msg || "Failed to add job. Please try again."
        );
      }
    });
  }

  return (
    <main className="relative flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center p-2 bg-gray-900 text-white">
        <div className="flex items-center gap-x-2 text-2xl font-bold">
          <HiBriefcase />
          CareerScout
        </div>
        <button
          onClick={handleLogout}
          className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg"
        >
          Logout
        </button>
      </nav>

      {/* Main Content */}
      <section className="flex items-center justify-center flex-grow flex-col gap-y-4">
        <h1 className="text-2xl my-4 font-bold">Hello, {userName || "User"}</h1>
        <h3 className="text-xl font-semibold text-center">
          Welcome to CareerScout
        </h3>
        <p className="text-lg text-center px-4">
          Track your job applications seamlessly. Click the button below to add
          the current job to your tracking list.
        </p>
        <button
          className={`bg-black hover:scale-105 duration-200 ease-linear text-white py-2 px-6 rounded-lg mt-4 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handleAddJob}
          disabled={loading} // Disable button while loading
        >
          {loading ? "Adding Job..." : "Add Current Job"}
        </button>
        <p className="text-lg text-center mt-6">
          Access your jobs on{" "}
          <a
            href="https://careerscout.vercel.app"
            target="_blank"
            rel="noopener noreferrer" // For security reasons
            className="underline hover:text-blue-700"
          >
            CareerScout Dashboard
          </a>
          .
        </p>
      </section>
    </main>
  );
};

Home.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Home;
