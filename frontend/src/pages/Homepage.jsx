import JobTracker from "../Components/JobTracker";

const Homepage = () => {
  return (
    <div className="min-h-[100%] h-[100%]  relative w-full flex-1   flex flex-col max-w-[1440px]  md:items-center  justify-center ">
      <JobTracker />
    </div>
  );
};

export default Homepage;
