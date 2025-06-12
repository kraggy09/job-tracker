// import React from "react";

// const CompaniesList = () => {
//   const logos = [
//     "./images/comapanies/googleLogo.png",
//     "./images/comapanies/googleLogo.png",
//     "./images/comapanies/googleLogo.png",
//     "./images/comapanies/googleLogo.png",
//     "./images/comapanies/googleLogo.png",
//     "./images/comapanies/googleLogo.png",
//     "./images/comapanies/googleLogo.png",
//     "./images/comapanies/googleLogo.png",
//     "./images/comapanies/googleLogo.png",
//     "./images/comapanies/googleLogo.png",
//     "./images/comapanies/googleLogo.png",
//     "./images/comapanies/googleLogo.png",
//     "./images/comapanies/googleLogo.png",
//     "./images/comapanies/googleLogo.png",
//     "./images/comapanies/googleLogo.png",
//   ];

//   return (
//     <div className="relative w-full my-15 py-6 flex justify-center">
//       <div className="w-[1300px] overflow-hidden relative">
//         <h2 className="mb-7 flex justify-center items-center text-5xl font-bold">Loved by interviewers at </h2>
//         {/* Scrolling Logos */}
//         <div className="flex animate-scroll space-x-10 w-max">
//           {[...logos, ...logos].map((src, index) => (
//             <img
//               key={index}
//               src={src}
//               alt={`Logo ${index + 1}`}
//               className="h-20 w-auto object-contain"
//             />
//           ))}
//         </div>

//         {/* Left Blur */}
//         <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-gray-100 via-gray-100 to-transparent pointer-events-none z-10" />
//         {/* Right Blur */}
//         <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-gray-100 via-gray-100 to-transparent pointer-events-none z-10" />
//       </div>

//       {/* Inline animation keyframes */}
//       <style>
//         {`
//           @keyframes scroll {
//             0% { transform: translateX(0); }
//             100% { transform: translateX(-50%); }
//           }
//           .animate-scroll {
//             animation: scroll 30s linear infinite;
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default CompaniesList;





import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

const CompaniesList = () => {
  const logos = [
    "./images/comapanies/googleLogo.png",
    "./images/comapanies/googleLogo.png",
    "./images/comapanies/googleLogo.png",
    "./images/comapanies/googleLogo.png",
    "./images/comapanies/googleLogo.png",
    "./images/comapanies/googleLogo.png",
    "./images/comapanies/googleLogo.png",
    "./images/comapanies/googleLogo.png",
    "./images/comapanies/googleLogo.png",
    "./images/comapanies/googleLogo.png",
    "./images/comapanies/googleLogo.png",
    "./images/comapanies/googleLogo.png",
    "./images/comapanies/googleLogo.png",
    "./images/comapanies/googleLogo.png",
    "./images/comapanies/googleLogo.png",
  ];

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false });

  const containerVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1, ease: "easeInOut" } },
  };

  const scrollVariants = {
    initial: { x: 0 },
    animate: {
      x: "-50%",
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 30,
        ease: "linear",
      },
    },
  };

  return (
    <motion.div
      className="relative w-full my-15 py-6 flex justify-center"
      ref={containerRef}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="w-[1300px] overflow-hidden relative">
        <h2 className="mb-7 flex justify-center items-center text-5xl font-bold">Loved by interviewers at </h2>
        {/* Scrolling Logos */}
        <motion.div
          className="flex space-x-10 w-max"
          variants={scrollVariants}
          initial="initial"
          animate="animate"
        >
          {[...logos, ...logos].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Logo ${index + 1}`}
              className="h-20 w-auto object-contain"
            />
          ))}
        </motion.div>

        {/* Left Blur */}
        <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-gray-100 via-gray-100 to-transparent pointer-events-none z-10" />
        {/* Right Blur */}
        <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-gray-100 via-gray-100 to-transparent pointer-events-none z-10" />
      </div>
    </motion.div>
  );
};

export default CompaniesList;