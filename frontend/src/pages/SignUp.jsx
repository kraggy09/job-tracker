import { useReducer } from "react";
import { HiBriefcase } from "react-icons/hi2";
import axios from "axios";
import toast from "react-hot-toast";

const SignUp = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "UPDATE_NAME":
        return { ...state, name: action.payload };
      case "UPDATE_EMAIL":
        return { ...state, email: action.payload };
      case "UPDATE_PASS":
        return { ...state, password: action.payload };
      default:
        return state;
    }
  };
  const apiUrl = "http://localhost:3000";

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (type, val) => {
    const actionType = "UPDATE_" + type.toUpperCase();
    dispatch({ type: actionType, payload: val });
  };

  const handleSignUp = async () => {
    try {
      const res = await axios.post(apiUrl + "user/register", {
        name: state.name,
        email: state.email,
        password: state.password,
      });

      if (res.data && res.data.token) {
        const newToken = res.data.token; // Retrieve token from response
        const newUser = res.data.user; // Store user data

        localStorage.setItem("token", newToken);
        localStorage.setItem("user", newUser);

        toast.success("SignUp successful!");
      } else {
        // Handle case where token is not returned but other response is
        const errMsg =
          res.response?.data?.msg || "SignUp failed. Please try again.";
        toast.error(errMsg);
      }
    } catch (error) {
      console.log("SignUp error:", error);
      const errorMsg =
        error.response?.data?.msg || "SignUp failed. Please try again.";
      toast.error(errorMsg);
    }
  };

  return (
    <main className="grid grid-cols-2 min-h-[100vh]">
      <div></div>
      <section className="flex items-center justify-center min-h-[100%] min-w-[50vw] gap-y-4 flex-col">
        <h1 className="text-3xl my-5 flex items-center justify-center gap-x-3 font-bold">
          <HiBriefcase /> Career Scout
        </h1>
        <h3 className="text-2xl font-semibold">SignUp </h3>
        <form
          className="flex flex-col gap-y-4 lg:min-w-[400px] min-w-[350px]"
          onSubmit={(e) => {
            e.preventDefault();
            handleSignUp();
          }}
        >
          <input
            required
            type="text"
            placeholder="Name"
            value={state.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className="px-3 py-2 text-lg border border-gray-400 rounded-lg"
          />
          <input
            required
            type="text"
            placeholder="Email"
            value={state.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="px-3 py-2 text-lg border border-gray-400 rounded-lg"
          />
          <input
            required
            type="password"
            placeholder="Password"
            value={state.password}
            onChange={(e) => handleChange("pass", e.target.value)}
            className="px-3 py-2 text-lg border border-gray-400 rounded-lg"
          />
          <button className="bg-black hover:scale-105 duration-200 ease-linear text-white py-2 rounded-lg">
            Sign Up
          </button>
        </form>
        <button className="underline text-lg hover:text-blue-700 mb-6">
          Already a member? Login here
        </button>
      </section>
    </main>
  );
};

export default SignUp;
