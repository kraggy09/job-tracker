// import React, { useEffect, useState } from "react";

// const images = [
//   "/images/resumetemplate01.png",
//   "/images/resumetemplate02.png",
//   "/images/resumetemplate03.png"
// ];

// const ResumeTemplate = () => {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % images.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   const getPositions = () => {
//     const left = images[(index + 2) % images.length];
//     const center = images[index];
//     const right = images[(index + 1) % images.length];
//     return { left, center, right };
//   };

//   const { left, center, right } = getPositions();

//   return (
//     <div className="flex justify-center mt-[70px]">
//       <div className="w-[1200px] bg-white shadow-lg rounded-3xl py-10 px-8 flex items-center justify-between">
//         {/* Left Side Text (White BG by default) */}
//         <div className="max-w-[600px] pr-4">
//           <div className="text-4xl font-bold mb-5 text-gray-900">
//             Pick Your Perfect Resume Template
//           </div>
//           <div className="text-gray-700 font-medium text-lg leading-relaxed">
//             Your resume is your first impression — make it count. Choose from a
//             range of professionally designed, ATS-friendly templates built to
//             highlight your skills and experience. Whether you're creative,
//             technical, or corporate-focused, we've got a layout that fits your
//             style and boosts your chances of getting noticed.
//           </div>
//         </div>

//         {/* Right Side Carousel with Black Background */}
//         <div className="relative w-[600px] h-[300px] flex items-center justify-center bg-black rounded-2xl">
//           {/* Left Image */}
//           <img
//             src={left}
//             alt="left"
//             className="absolute left-0 w-[150px] h-[220px] object-contain opacity-50 transition-all duration-700 ease-in-out scale-90"
//           />

//           {/* Center Image */}
//           <img
//             src={center}
//             alt="center"
//             className="z-10 w-[250px] h-[280px] object-contain shadow-2xl transition-all duration-700 ease-in-out scale-110"
//           />

//           {/* Right Image */}
//           <img
//             src={right}
//             alt="right"
//             className="absolute right-0 w-[150px] h-[220px] object-contain opacity-50 transition-all duration-700 ease-in-out scale-90"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResumeTemplate;





import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const images = [
  "/images/resumetemplate01.png",
  "/images/resumetemplate02.png",
  "/images/resumetemplate03.png",
];

const ResumeTemplate = () => {
  const [index, setIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,           // 👈 animate every time it's in view
    margin: "-100px 0px",  // start animation slightly earlier
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getPositions = () => {
    const left = images[(index + 2) % images.length];
    const center = images[index];
    const right = images[(index + 1) % images.length];
    return { left, center, right };
  };

  const { left, center, right } = getPositions();

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="flex justify-center px-4 sm:px-6 lg:px-8 mt-20"
    >
      <div className="w-full max-w-[1200px] bg-white shadow-xl rounded-3xl py-10 px-10 flex flex-col md:flex-row md:items-center justify-between gap-10">
        
        {/* Left Side Text */}
        <div className="md:max-w-[50%] h-full flex flex-col justify-center space-y-6">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Pick Your Perfect Resume Template
          </h2>
          <p className="text-gray-700 font-medium text-lg leading-relaxed">
            Your resume is your first impression — make it count. Choose from a
            range of professionally designed, ATS-friendly templates built to
            highlight your skills and experience. Whether you're creative,
            technical, or corporate-focused, we've got a layout that fits your
            style and boosts your chances of getting noticed.
          </p>
        </div>

        {/* Right Side Carousel */}
        <div className="relative w-full md:w-[50%] h-[500px] bg-black rounded-2xl p-4 flex items-center justify-center shadow-inner overflow-hidden">
          {/* Left Image */}
          <motion.img
            key={left}
            src={left}
            alt="left"
            initial={{ opacity: 0, x: -50, scale: 0.8 }}
            animate={{ opacity: 0.4, x: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
            className="absolute left-6 w-[160px] h-[250px] object-contain"
          />

          {/* Center Image */}
          <AnimatePresence mode="wait">
            <motion.img
              key={center}
              src={center}
              alt="center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1.1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6 }}
              className="z-10 w-[450px] h-[400px] object-contain shadow-2xl"
            />
          </AnimatePresence>

          {/* Right Image */}
          <motion.img
            key={right}
            src={right}
            alt="right"
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            animate={{ opacity: 0.4, x: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
            className="absolute right-6 w-[160px] h-[250px] object-contain"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ResumeTemplate;







// import React, { useEffect, useState } from "react";

// const images = [
//   "/images/resumetemplate01.png",
//   "/images/resumetemplate02.png",
//   "/images/resumetemplate03.png"
// ];

// const ResumeTemplate = () => {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % images.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   const getPositions = () => {
//     const left = images[(index + 2) % images.length];
//     const center = images[index];
//     const right = images[(index + 1) % images.length];
//     return { left, center, right };
//   };

//   const { left, center, right } = getPositions();

//   return (
//     <div className="flex justify-center px-4 sm:px-6 lg:px-8 mt-20">
//       <div className="w-full max-w-[1200px] bg-white shadow-xl rounded-3xl py-10 px-10 flex flex-col md:flex-row md:items-center justify-between gap-10">
        
//         {/* Left Side Text */}
//         <div className="md:max-w-[50%] h-full flex flex-col justify-center space-y-6">
//           <h2 className="text-4xl font-extrabold text-gray-900">
//             Pick Your Perfect Resume Template
//           </h2>
//           <p className="text-gray-700 font-medium text-lg leading-relaxed">
//             Your resume is your first impression — make it count. Choose from a
//             range of professionally designed, ATS-friendly templates built to
//             highlight your skills and experience. Whether you're creative,
//             technical, or corporate-focused, we've got a layout that fits your
//             style and boosts your chances of getting noticed.
//           </p>
//         </div>

//         {/* Right Side Carousel */}
//         <div className="relative w-full md:w-[50%] h-[500px] bg-black rounded-2xl p-4 flex items-center justify-center shadow-inner">
//           {/* Left Image */}
//           <img
//             src={left}
//             alt="left"
//             className="absolute left-6 w-[160px] h-[250px] object-contain opacity-40 transition-all duration-700 ease-in-out scale-90"
//           />

//           {/* Center Image */}
//           <img
//             src={center}
//             alt="center"
//             className="z-10 w-[450px] h-[400px] object-contain shadow-2xl transition-all duration-700 ease-in-out scale-110"
//           />

//           {/* Right Image */}
//           <img
//             src={right}
//             alt="right"
//             className="absolute right-6 w-[160px] h-[250px] object-contain opacity-40 transition-all duration-700 ease-in-out scale-90"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResumeTemplate;

