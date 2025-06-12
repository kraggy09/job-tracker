// import React from "react";

// const WhyUs = () => {
//   return (
//     <div>
//       <div>
//         <p className="flex items-center justify-center text-5xl font-bold text-center">
//           Why Us? AI-Powered, Recruiter-Approved.
//         </p>
//         <p className="flex items-center justify-center text-2xl mt-5 text-center">
//           Craft professional resumes that pass ATS and impress hiring managers
//         </p>
//       </div>

//       <div className="flex justify-center relative mt-2 z-50">
//         <div className="mt-5 w-[1200px] bg-white shadow-md rounded-3xl py-10 px-6 flex-col flex items-center justify-between space-y-10">
          
//           {/* Block 1 */}
//           <div className="flex gap-8">
//             <div className="w-1/2 flex flex-col justify-center px-10">
//               <h3 className="text-xl font-semibold mb-2">Why ATS Optimization Matters?</h3>
//               <p className="text-indigo-500 font-medium mb-2">~Get noticed before you get shortlisted.</p>
//               <p>
//                 ATS optimization ensures your resume passes automated filters used by most employers.
//                 Without the right structure and keywords, it may never reach a recruiter. Optimization
//                 improves your chances of being seen and shortlisted.
//               </p>
//             </div>
//             <div className="w-1/2">
//               <img src="./images/why1.png" alt="Why ATS" className="w-[450px] h-auto object-contain" />
//             </div>
//           </div>

//           {/* Block 2 */}
//           <div className="flex gap-8">
//             <div className="w-1/2">
//               <img src="./images/why2.png" alt="Visibility" className="w-[450px] h-auto object-contain" />
//             </div>
//             <div className="w-1/2 flex flex-col justify-center px-10">
//               <h3 className="text-xl font-semibold mb-2">Does It Boost Visibility?</h3>
//               <p className="text-indigo-500 font-medium mb-2">~Be seen by the right eyes.</p>
//               <p>
//                 By aligning with job-specific keywords, an ATS-optimized resume ranks higher in applicant systems.
//                 This boosts your visibility and helps you stand out among hundreds of candidates.
//               </p>
//             </div>
//           </div>

//           {/* Block 3 */}
//           <div className="flex gap-8">
//             <div className="w-1/2 flex flex-col justify-center px-10">
//               <h3 className="text-xl font-semibold mb-2">Relevant Across All Industries?</h3>
//               <p className="text-indigo-500 font-medium mb-2">~From startups to Fortune 500s—</p>
//               <p className="mb-1">ATS is everywhere.</p>
//               <p>
//                 ATS systems are used across industries, from tech to healthcare.
//                 An optimized resume ensures it’s readable and relevant, no matter the field you’re applying in.
//               </p>
//             </div>
//             <div className="w-1/2">
//               <img src="./images/why3.png" alt="Industries" className="w-[450px] h-auto object-contain" />
//             </div>
//           </div>

//           {/* Block 4 */}
//           <div className="flex gap-8">
//             <div className="w-1/2">
//               <img src="./images/why4.png" alt="Professionals" className="w-[450px] h-auto object-contain" />
//             </div>
//             <div className="w-1/2 flex flex-col justify-center px-10">
//               <h3 className="text-xl font-semibold mb-2">Useful for Professionals Too?</h3>
//               <p className="text-indigo-500 font-medium mb-2">~Experience matters—but formatting does too</p>
//               <p>
//                 Even experienced professionals can be missed by ATS. Optimization ensures your skills
//                 and achievements are correctly captured and highlighted in the screening process.
//               </p>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhyUs;




import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const WhyUs = () => {
  const blocks = [
    {
      title: "Why ATS Optimization Matters?",
      subtitle: "~Get noticed before you get shortlisted.",
      content:
        "ATS optimization ensures your resume passes automated filters used by most employers. Without the right structure and keywords, it may never reach a recruiter. Optimization improves your chances of being seen and shortlisted.",
      image: "./images/why1.png",
    },
    {
      title: "Does It Boost Visibility?",
      subtitle: "~Be seen by the right eyes.",
      content:
        "By aligning with job-specific keywords, an ATS-optimized resume ranks higher in applicant systems. This boosts your visibility and helps you stand out among hundreds of candidates.",
      image: "./images/why2.png",
    },
    {
      title: "Relevant Across All Industries?",
      subtitle: "~From startups to Fortune 500s—",
      content:
        "ATS systems are used across industries, from tech to healthcare. An optimized resume ensures it’s readable and relevant, no matter the field you’re applying in.",
      image: "./images/why3.png",
    },
    {
      title: "Useful for Professionals Too?",
      subtitle: "~Experience matters—but formatting does too",
      content:
        "Even experienced professionals can be missed by ATS. Optimization ensures your skills and achievements are correctly captured and highlighted in the screening process.",
      image: "./images/why4.png",
    },
  ];

  const slideFrom = (direction) => ({
    hidden: { opacity: 0, x: direction === "left" ? -100 : 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  });

  const AnimatedBlock = ({ block, reverse }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, threshold: 0.2 });

    return (
      <div
        ref={ref}
        className={`flex gap-8 items-center ${reverse ? "flex-row-reverse" : ""}`}
      >
        {/* Image Side */}
        <motion.div
          variants={slideFrom(reverse ? "left" : "right")}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="w-1/2"
        >
          <img
            src={block.image}
            alt={block.title}
            className="w-[450px] h-auto object-contain"
          />
        </motion.div>

        {/* Text Side */}
        <motion.div
          variants={slideFrom(reverse ? "right" : "left")}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="w-1/2 flex flex-col justify-center px-10"
        >
          <h3 className="text-xl font-semibold mb-2">{block.title}</h3>
          <p className="text-indigo-500 font-medium mb-2">{block.subtitle}</p>
          <p className="text-gray-700">{block.content}</p>
        </motion.div>
      </div>
    );
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        <p className="flex items-center justify-center text-5xl font-bold text-center">
          Why Us? AI-Powered, Recruiter-Approved.
        </p>
        <p className="flex items-center justify-center text-2xl mt-5 text-center">
          Craft professional resumes that pass ATS and impress hiring managers
        </p>
      </motion.div>

      <div className="flex justify-center relative mt-2 z-0">
        <div className="mt-5 w-[1200px] bg-white shadow-md rounded-3xl py-10 px-6 flex-col flex items-center justify-between space-y-16">
          {blocks.map((block, idx) => (
            <AnimatedBlock key={idx} block={block} reverse={idx % 2 !== 0} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;


