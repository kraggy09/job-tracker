import AnalyzerIcon from "../Icons/AnalyzerIcon";
import CheckedIcon from "../Icons/CheckedIcon";
import EnhancerIcon from "../Icons/EnhancerIcon";
import GlassDoorIcon from "../Icons/GlassDoorIcon";
import IndeedIcon from "../Icons/IndeedIcon";
import LinkedInIcon from "../Icons/LinkedInIcon";
import NaukriIcon from "../Icons/NaukriIcon";
import TrackerIcon from "../Icons/TrackerIcon";
import WellFoundIcon from "../Icons/WellfoundIcon";

const LandingPage = () => {
  return (
    <div className="min-h-[100%] h-[100%]  relative w-full flex-1   flex flex-col max-w-[1440px]  md:items-center  justify-center  ">
      <main className="min-w-[100%] max-w-[1440px] px-3">
        <section className="min-w-full my-20 grid grid-cols-5  gap-y-12">
          <article className="md:col-span-3 col-span-5 flex flex-col gap-y-12">
            <header className="flex flex-col gap-5">
              <h1 className="text-4xl font-bold">
                AI Job Tracker & Resume Analyzer
              </h1>
              <h2 className="text-3xl font-semibold">
                Compatible with 5+ major job platforms
              </h2>
              <p className="mx-auto pr-16 text-gray-500 md:text-xl dark:text-gray-400">
                Boost your job search with our cutting-edge AI technology.
                Analyze job postings, enhance your resume, and track your
                applications all in one place.
              </p>
              <p className="flex text-xl mt-4 items-center gap-x-4">
                <span>Track</span>
                <div className="min-w-6 min-h-[2px] bg-black"></div>
                <span>Analyze</span>
                <div className="min-w-6 min-h-[2px] bg-black"></div>
                <span>Improve</span>
                <div className="min-w-6 min-h-[2px] bg-black"></div>
                <span>Apply</span>
              </p>
            </header>
            <section className="grid text-lg grid-cols-3 gap-3">
              <p className="flex items-center  gap-x-2">
                <CheckedIcon /> Easy to Use
              </p>
              <p className="flex items-center  gap-x-2">
                <CheckedIcon /> Fast Performance
              </p>
              <p className="flex items-center  gap-x-2">
                <CheckedIcon /> Resume Improvement
              </p>
              <p className="flex items-center  gap-x-2">
                <CheckedIcon /> Personalized Feedback
              </p>
              <p className="flex items-center  gap-x-2">
                <CheckedIcon /> Secure Data
              </p>
              <p className="flex items-center  gap-x-2">
                <CheckedIcon /> AI-Powered Insights
              </p>
            </section>
            <footer className="text-lg mt-6">
              <button
                className="bg-black text-white p-3 rounded-lg"
                aria-label="Install Free Extension"
              >
                Install Free Extension
              </button>
            </footer>
          </article>
          <aside className="md:col-span-2 col-span-5"></aside>
        </section>

        <section className="min-h-[50vh] flex flex-col items-start justify-around">
          <h2 className="font-bold text-start text-3xl">Key Features</h2>
          <article className="grid grid-cols-1 gap-y-6 md:grid-cols-3 gap-x-14 ">
            <div className="rounded-lg text-xl flex flex-col gap-y-6 bg-slate-50 p-5 shadow-lg ">
              <div className="text-2xl">
                <AnalyzerIcon />
                <p>AI Job Analyzer</p>
              </div>
              <p className="text-gray-500 pr-6">
                Get instant insights on job requirements and how well your
                profile matches.
              </p>
            </div>
            <div className="rounded-lg text-xl flex flex-col gap-y-6 bg-slate-50 p-5 shadow-lg">
              <div className="text-2xl">
                <EnhancerIcon />
                <p>Resume Enhancer</p>
              </div>
              <p className="text-gray-500 pr-6">
                Receive AI-powered suggestions to improve your resume and
                increase your chances of landing interviews.
              </p>
            </div>
            <div className="rounded-lg text-xl flex flex-col gap-y-6 bg-slate-50 p-5 shadow-lg">
              <div className="text-2xl">
                <TrackerIcon />
                <p>Application Tracker</p>
              </div>
              <p className="text-gray-500 pr-6">
                Keep track of all your job applications, interviews, and
                follow-ups in one place.
              </p>
            </div>
          </article>
        </section>
        <main className="bg-custom-white flex flex-col py-8 gap-y-6 items-center  justify-center">
          <div className="bg-green-500 mt-6 px-3 py-2 text-white  rounded-lg">
            We know our audience
          </div>
          <h1 className="lg:px-80 my-8 px-6 font-semibold text-center text-2xl lg:text-3xl inline-block tracking-widest lg:tracking-normal">
            Whether you&apos;re preparing for placements or looking for a job
            switch, we got you covered
          </h1>
          <div className="max-w-[100%] my-12 flex lg:flex-row flex-col-reverse gap-y-16">
            <div className="min-w-[50%] flex items-start justify-center gap-y-6 flex-col mr-8">
              <h2 className="text-3xl">
                Boost your chances of landing a job by 80%
              </h2>
              <p className="text-xl text-custom-gray">
                Get detailed AI-driven insights after each job application,
                highlighting strengths and providing personalized
                recommendations for improvement. Tailored feedback from industry
                experts helps optimize your resume for maximum impact.
              </p>

              <button className="bg-black flex items-center min-w-full lg:min-w-[10px] justify-center gap-x-3 hover:scale-110 transition-all duration-200 text-white px-8 rounded-xl py-2 text-xl">
                Install Now!
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
                </svg>
              </button>
            </div>
            <img
              className="lg:max-w-[45%]"
              src="https://d2b1cooxpkirg1.cloudfront.net/publicAssets/mock-interviews/features-1.png"
              alt="features-tab"
            />
          </div>
        </main>
        <section className="my-12 flex flex-col gap-y-12">
          <div
            className="flex
         flex-col gap-y-3"
          >
            <h1 className="text-4xl text-gray-500 font-semibold">
              Stop switching tabs for applying Jobs.
            </h1>
            <h2 className="text-4xl font-semibold">
              Use AI on multiple sites, Instantly.
            </h2>
          </div>
          <div className=" grid md:grid-cols-5 grid-cols-3 gap-6 items-center justify-center text-5xl">
            <NaukriIcon className="md:h-10" />{" "}
            <LinkedInIcon w={"50"} h={"50"} />
            <GlassDoorIcon w={"200"} h={"40"} /> <WellFoundIcon w={"50"} />{" "}
            <IndeedIcon h={"40"} />
          </div>
        </section>
        <footer className="border-t-2 border-gray-400 min-w-full flex items-center justify-between">
          <span>CareerScout</span>
          <span className="flex group items-center justify-center gap-x-1">
            <p>Made with</p>
            <svg
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="red"
            >
              <path d="m9.653 16.915-.005-.003-.019-.01a20.759 20.759 0 0 1-1.162-.682 22.045 22.045 0 0 1-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 0 1 8-2.828A4.5 4.5 0 0 1 18 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 0 1-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 0 1-.69.001l-.002-.001Z"></path>
            </svg>
            <p>by</p>
            <p className="hover:underline group-hover:underline">
              {" "}
              Kaif Shaikh
            </p>
          </span>

          <span></span>
        </footer>
      </main>
    </div>
  );
};

export default LandingPage;
