


import React from "react";
import { motion } from "framer-motion";

const plans = [
  {
    title: "Free Tier",
    price: "$0",
    sub: "forever",
    desc: "Perfect for job seekers just getting started",
    features: [
      "Track job applications without limits",
      "Basic resume-job match analysis",
      "Limited ATS optimization suggestions",
    ],
    buttonText: "Sign Up For Free",
  },
  {
    title: "Pro Tier",
    price: "$4.99",
    sub: "/month",
    desc: "Perfect for serious job seekers",
    features: [
      "Full resume analysis with Gemini AI",
      "Portfolio website generator",
      "Advanced ATS optimization",
    ],
    buttonText: "Get Started With Pro",
  },
  {
    title: "One-Time Services",
    price: "",
    sub: "",
    desc: "Pay per service\nAdd-on services to boost your job search",
    features: [
      "Portfolio Website Export: $39.99",
      "Professional Resume Rewrite: $14.99",
      "Mock Interview Add-On: $9.99/session",
    ],
    buttonText: "View All Services",
  },
];

const Subscription = () => {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
      className="py-20 px-4 flex flex-col items-center"
    >
      <h1 className="text-4xl font-bold text-center mb-4">
        Choose the Perfect Plan for Your Career
      </h1>
      <p className="text-lg text-gray-600 text-center mb-10 max-w-2xl">
        Get the tools you need to land your dream job with our flexible pricing options
      </p>

      {/* Plan Toggle Placeholder */}
      <div className="flex justify-center mb-12">
        <div className="bg-gray-200 p-1 rounded-full">
          <button className="px-4 py-1 rounded-full bg-white shadow text-sm font-medium">
            Monthly
          </button>
          <button className="px-4 py-1 rounded-full text-gray-600 text-sm ml-1">
            Annual <span className="text-green-500 font-semibold">Save 30%</span>
          </button>
        </div>
      </div>

      {/* Plan Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="bg-white rounded-2xl border border-gray-300 shadow-md p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-semibold mb-2">{plan.title}</h3>
              <div className="text-3xl font-bold">
                {plan.price} <span className="text-base font-normal">{plan.sub}</span>
              </div>
              <p className="text-gray-600 text-sm mt-2 whitespace-pre-line">{plan.desc}</p>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-800">
                    <img src="/images/tick.png" alt="tick" className="w-5 h-5 mt-[2px]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <button className="cursor-pointer mt-6 w-full bg-black text-white py-2 rounded-full border-2 font-semibold text-sm hover:bg-white hover:text-black transition duration-500">
              {plan.buttonText}
            </button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Subscription;
