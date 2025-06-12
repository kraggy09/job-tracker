// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="bg-black text-white px-6 md:px-20 py-16">
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
//         {/* Jobgenie */}
//         <div>
//           <h3 className="font-bold mb-4">JOBGENIE</h3>
//           <p className="text-sm text-gray-300 leading-relaxed">
//             Improve your resume to be ATS-friendly and boost your chances of
//             getting interviews with our AI-powered platform.
//           </p>
//         </div>

//         {/* Products */}
//         <div>
//           <h3 className="font-bold mb-4">PRODUCTS</h3>
//           <ul className="space-y-2 text-sm text-gray-300">
//             <li>RESUME BUILDER</li>
//             <li>ATS CHECKER</li>
//             <li>JOB TRACKER</li>
//             <li>PORTFOLIO BUILDER</li>
//           </ul>
//         </div>

//         {/* Resources */}
//         <div>
//           <h3 className="font-bold mb-4">RESOURCES</h3>
//           <ul className="space-y-2 text-sm text-gray-300">
//             <li>BLOG</li>
//             <li>CAREER ADVICE</li>
//             <li>TEMPLATES</li>
//             <li>FAQ</li>
//           </ul>
//         </div>

//         {/* Company */}
//         <div>
//           <h3 className="font-bold mb-4">COMPANY</h3>
//           <ul className="space-y-2 text-sm text-gray-300">
//             <li>ABOUT US</li>
//             <li>CAREERS</li>
//             <li>CONTACT</li>
//             <li>PRIVACY POLICY</li>
//           </ul>
//         </div>
//       </div>

//       {/* Divider */}
//       <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
//         © 2025 JOBGENIE. ALL RIGHTS RESERVED.
//       </div>
//     </footer>
//   );
// };

// export default Footer;






import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-black text-white px-6 md:px-20 py-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
        {/* Jobgenie */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <h3 className="font-bold mb-4">JOBGENIE</h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            Improve your resume to be ATS-friendly and boost your chances of
            getting interviews with our AI-powered platform.
          </p>
        </motion.div>

        {/* Products */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <h3 className="font-bold mb-4">PRODUCTS</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>RESUME BUILDER</li>
            <li>ATS CHECKER</li>
            <li>JOB TRACKER</li>
            <li>PORTFOLIO BUILDER</li>
          </ul>
        </motion.div>

        {/* Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <h3 className="font-bold mb-4">RESOURCES</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>BLOG</li>
            <li>CAREER ADVICE</li>
            <li>TEMPLATES</li>
            <li>FAQ</li>
          </ul>
        </motion.div>

        {/* Company */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <h3 className="font-bold mb-4">COMPANY</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>ABOUT US</li>
            <li>CAREERS</li>
            <li>CONTACT</li>
            <li>PRIVACY POLICY</li>
          </ul>
        </motion.div>
      </div>

      {/* Divider */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400"
      >
        © 2025 JOBGENIE. ALL RIGHTS RESERVED.
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
