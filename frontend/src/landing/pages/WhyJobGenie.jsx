// import React from "react";
// import {
//   FaBolt,
//   FaFire,
//   FaPuzzlePiece,
//   FaUserFriends
// } from "react-icons/fa"; // using react-icons for icons

// const stats = [
//   {
//     icon: <FaBolt className="text-3xl text-black mb-2" />,
//     title: "3x Faster Resume Building",
//     desc: "Create ATS-optimized resumes in minutes with our AI-powered templates"
//   },
//   {
//     icon: <FaFire className="text-3xl text-black mb-2" />,
//     title: "4x More Interviews",
//     desc: "With ATS-optimized resumes that get you past automated screening systems"
//   },
//   {
//     icon: <FaPuzzlePiece className="text-3xl text-black mb-2" />,
//     title: "78% More Matches",
//     desc: "Our resumes tailored to each job description improve your chances"
//   },
//   {
//     icon: <FaUserFriends className="text-3xl text-black mb-2" />,
//     title: "2,500+ Users",
//     desc: "Join thousands who've successfully managed their job applications"
//   }
// ];

// const WhyJobGenie = () => {
//   return (
//     <div className="py-20 px-4 flex flex-col items-center bg-gray-50">
//       <h2 className="text-4xl font-bold text-center mb-2">
//         See why job seekers love JobGenie
//       </h2>
//       <p className="text-lg text-gray-600 text-center mb-10 max-w-2xl">
//         Hear how we’ve made a difference from those who matter most — our users.
//       </p>


//       <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl">
//         {stats.map((stat, i) => (
//           <div key={i} className="text-center px-4">
//             {stat.icon}
//             <h3 className="text-xl font-semibold mb-1">{stat.title}</h3>
//             <p className="text-sm text-gray-600">{stat.desc}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WhyJobGenie;




import React from "react";
import { motion } from "framer-motion";
import {
  FaBolt,
  FaFire,
  FaPuzzlePiece,
  FaUserFriends
} from "react-icons/fa";

const stats = [
  {
    icon: <FaBolt className="text-3xl text-black" />,
    title: "3x Faster Resume Building",
    desc: "Create ATS-optimized resumes in minutes with our AI-powered templates"
  },
  {
    icon: <FaFire className="text-3xl text-black" />,
    title: "4x More Interviews",
    desc: "With ATS-optimized resumes that get you past automated screening systems"
  },
  {
    icon: <FaPuzzlePiece className="text-3xl text-black" />,
    title: "78% More Matches",
    desc: "Our resumes tailored to each job description improve your chances"
  },
  {
    icon: <FaUserFriends className="text-3xl text-black" />,
    title: "2,500+ Users",
    desc: "Join thousands who've successfully managed their job applications"
  }
];

const WhyJobGenie = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.3 }}
      className="py-20 px-4 flex flex-col items-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center mb-2"
      >
        See why job seekers love JobGenie
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-lg text-gray-600 text-center mb-10 max-w-2xl"
      >
        Hear how we’ve made a difference from those who matter most — our users.
      </motion.p>

      {/* Centered Column Layout */}
      <div className="flex flex-col gap-12 max-w-xl w-full items-center">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            className="text-center px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="flex justify-center mb-2">{stat.icon}</div>
            <h3 className="text-xl font-semibold mb-1">{stat.title}</h3>
            <p className="text-sm text-gray-600">{stat.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default WhyJobGenie;


