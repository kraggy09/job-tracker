import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Sophia Brown",
    role: "Software Engineer",
    quote: "Improved job search results instantly.",
    image: "/images/user.png"
  },
  {
    name: "Liam Miller",
    role: "Marketing Specialist",
    quote: "Boosted interview opportunities significantly.",
    image: "/images/user.png"
  },
  {
    name: "Emma White",
    role: "Graphic Designer",
    quote: "Enhanced portfolio visibility.",
    image: "/images/user.png"
  },
  {
    name: "Daniel Green",
    role: "Product Manager",
    quote: "Organized job hunt made easy.",
    image: "/images/user.png"
  },
  {
    name: "Olivia Smith",
    role: "HR Specialist",
    quote: "Best resume tool I've used!",
    image: "/images/user.png"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Loop every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Helper to get 3 items: previous, current, next
  const getVisibleTestimonials = () => {
    const total = testimonials.length;
    const prev = testimonials[(currentIndex - 1 + total) % total];
    const curr = testimonials[currentIndex];
    const next = testimonials[(currentIndex + 1) % total];
    return [prev, curr, next];
  };

  const visible = getVisibleTestimonials();

  return (
    <div className="py-20  flex flex-col items-center">
      <h2 className="text-4xl font-bold text-center mb-12">
        Job Seeker Recommendations
      </h2>

      <div className="bg-black rounded-2xl p-8 w-[90%] max-w-6xl relative">
        <div className="flex justify-center gap-6 items-center">
          {visible.map((t, i) => {
            const isCenter = i === 1;
            return (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: isCenter ? 1.1 : 1 }}
                transition={{ duration: 0.6 }}
                className={`bg-white rounded-2xl p-6 shadow-md text-center transition-all duration-500 ${
                  isCenter ? "w-80" : "w-72 opacity-80"
                }`}
              >
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full mx-auto mb-3 object-cover"
                />
                <h4 className="font-semibold">{t.name}</h4>
                <p className="text-gray-500 text-sm">{t.role}</p>
                <p className="text-sm text-gray-700 mt-3">{t.quote}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === currentIndex ? "bg-white" : "bg-gray-500"
              }`}
            />
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-6">
          <button className="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition duration-300">
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;







