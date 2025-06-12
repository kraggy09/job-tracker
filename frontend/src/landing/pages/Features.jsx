
// import React from "react";

// const Features = () => {
//   return (
//     <div className="px-4 py-16 flex flex-col items-center">
//       {/* Heading */}
//       <h1 className="font-bold text-5xl text-center mb-16">
//         Features of our structured resume builder
//       </h1>

//       {/* Features Container */}
//       <div
//         className="bg-cover bg-center rounded-xl shadow-lg w-full max-w-[1200px] px-6 py-10"
//         style={{ backgroundImage: "url('/images/featuresBG.png')" }}
//       >
//         {/* Top Row */}
//         <div className="flex justify-between mb-10">
//           <div className="bg-white p-4 w-[260px] h-[160px] rounded-2xl shadow-md text-center font-bold text-lg flex items-center justify-center">
//             📄 Clean, professional, and ATS-friendly layouts
//           </div>
//           <div className="bg-white p-4 w-[260px] h-[160px] rounded-2xl shadow-md text-center font-bold text-lg flex items-center justify-center">
//             🤖 AI-powered content suggestions tailored to job roles
//           </div>
//         </div>

//         {/* Center Image */}
//         <div className="flex justify-center my-8">
//           <img
//             src="/images/featuresImage.png"
//             alt="Feature Visual"
//             className="h-[300px] rounded-bl-xl"
//           />
//         </div>

//         {/* Bottom Row */}
//         <div className="flex justify-between mt-10">
//           <div className="bg-white p-4 w-[260px] h-[160px] rounded-2xl shadow-md text-center font-bold text-lg flex items-center justify-center">
//             🔍 Keyword optimization for better job matching
//           </div>
//           <div className="bg-white p-4 w-[260px] h-[160px] rounded-2xl shadow-md text-center font-bold text-lg flex items-center justify-center">
//             ⚙️ ATS-friendly formatting to pass resume screening systems
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Features;




import React from "react";
import { motion } from "framer-motion";

const Features = () => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }} // changed here
      className="px-4 py-16 flex flex-col items-center"
    >
      {/* Heading */}
      <h1 className="font-bold text-5xl text-center mb-16">
        Features of our structured resume builder
      </h1>

      {/* Features Container */}
      <div
        className="bg-cover bg-center rounded-xl shadow-lg w-full max-w-[1200px] px-6 py-10"
        style={{ backgroundImage: "url('/images/featuresBG.png')" }}
      >
        {/* Top Row */}
        <div className="flex justify-between mb-10">
          <div className="bg-white p-4 w-[260px] h-[160px] rounded-2xl shadow-md text-center font-bold text-lg flex items-center justify-center">
            📄 Clean, professional, and ATS-friendly layouts
          </div>
          <div className="bg-white p-4 w-[260px] h-[160px] rounded-2xl shadow-md text-center font-bold text-lg flex items-center justify-center">
            🤖 AI-powered content suggestions tailored to job roles
          </div>
        </div>

        {/* Center Image */}
        <div className="flex justify-center my-8">
          <img
            src="/images/featuresImage.png"
            alt="Feature Visual"
            className="h-[300px] rounded-bl-xl"
          />
        </div>

        {/* Bottom Row */}
        <div className="flex justify-between mt-10">
          <div className="bg-white p-4 w-[260px] h-[160px] rounded-2xl shadow-md text-center font-bold text-lg flex items-center justify-center">
            🔍 Keyword optimization for better job matching
          </div>
          <div className="bg-white p-4 w-[260px] h-[160px] rounded-2xl shadow-md text-center font-bold text-lg flex items-center justify-center">
            ⚙️ ATS-friendly formatting to pass resume screening systems
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Features;

