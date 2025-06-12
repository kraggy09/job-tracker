// import React from "react";

// const Resume = () => {
//   return (
//     <div id="#resume" className="flex justify-center relative mt-2">
//       <div className="mt-5 w-[1200px] bg-white shadow-md rounded-3xl py-2 px-6 flex items-center justify-between">
//         <div className="my-5 max-w-xl">
//           <div>
//             <p className="bg-gray-200 text-sm rounded-full px-3 py-1 inline-block">
//               JobGenie launches v2.1
//             </p>
//           </div>
//           <div className="text-5xl font-bold mt-4 mb-3">
//             Boost Your Resume.
//             <br />
//             Land More Interviews.
//           </div>
//           <div className="text-md mb-6">
//             Job Genie gives you instant ATS feedback and AI-powered suggestions
//             to improve your resume, tailor it to each job description, and boost
//             your chances of landing interviews.
//           </div>

//           {/* File Upload Section */}
//           <div className="border-2 border-dashed border-gray-300 rounded-lg p-3 text-center mt-4">
//             <img className=" cursor-pointer" src="./fileUpload.png" alt="" />
//           </div>
//         </div>

//         {/* Right side with resume visualization */}
//         <div className="relative">
//           <img
//             className="w-full cursor-pointer"
//             src="./resumeModel.png"
//             alt=""
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Resume;





import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Resume = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false });

  const containerVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 1, ease: "easeInOut" } },
  };

  return (
    <motion.div
      id="#resume"
      className="flex justify-center relative"
      ref={containerRef}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="mt-[110px] w-[1200px] bg-white shadow-md rounded-3xl py-2 px-6 flex items-center justify-center">
        <div className="my-5 max-w-xl">
          <div>
            <p className="bg-gray-200 text-sm rounded-full px-3 py-1 inline-block">
              JobGenie launches v2.1
            </p>
          </div>
          <div className="text-5xl font-bold mt-4 mb-3">
            Boost Your Resume.
            <br />
            Land More Interviews.
          </div>
          <div className="text-md mb-6">
            Job Genie gives you instant ATS feedback and AI-powered suggestions
            to improve your resume, tailor it to each job description, and boost
            your chances of landing interviews.
          </div>

          {/* File Upload Section */}
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-3 text-center mt-4">
            <img className=" cursor-pointer" src="./fileUpload.png" alt="" />
          </div>
        </div>

        {/* Right side with resume visualization */}
        <div className="relative">
          <img
            className="w-full cursor-pointer"
            src="./resumeModel.png"
            alt=""
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;