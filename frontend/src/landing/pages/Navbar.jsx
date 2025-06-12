// import React, { useState, useEffect } from 'react';
// import { FiMenu, FiX } from 'react-icons/fi';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(prev => !prev);

//   useEffect(() => {
//     document.body.style.overflow = isOpen ? 'hidden' : 'auto';
//   }, [isOpen]);

//   const navItems = [
//     { label: 'RESUME', href: '#resume' },
//     { label: 'DASHBOARD', href: '#dashboard' },
//     { label: 'PORTFOLIO BUILDER', href: '#portfolio' },
//     { label: 'TESTIMONIALS', href: '#testimonials' },
//     { label: 'PRICING', href: '#pricing' },
//   ];

//   return (
//     <div className="w-full flex justify-center z-50 relative ">
//       <div className="mt-[5px] w-[1200px] bg-white shadow-md rounded-[24px] py-2 px-6 flex items-center justify-between h-[90px]">
//         <div className="text-xl font-extrabold tracking-tight text-black">
//           <img className="w-[170px]" src="/logo.png" alt="Logo" />
//         </div>

//         {/* Desktop Nav */}
//         <div className="hidden md:flex items-center space-x-5 font-medium text-sm text-gray-700">
//           {navItems.map(({ label, href }) => (
//             <a
//               key={label}
//               href={href}
//               className="hover:text-black transition-colors"
//             >
//               {label}
//             </a>
//           ))}
//         </div>

//         <div className="hidden md:flex items-center space-x-4">
//           <button className="bg-black text-white rounded-[12px] px-4 py-3 border hover:bg-white hover:text-black cursor-pointer duration-200 text-sm font-medium">
//             Get started
//           </button>
//         </div>

//         <div className="md:hidden z-50">
//           <button onClick={toggleMenu}>
//             {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Slide-In Menu */}
//       <div
//         className={`fixed top-0 left-0 w-full h-full bg-white z-40 transform transition-transform duration-300 ease-in-out ${
//           isOpen ? 'translate-x-0' : '-translate-x-full'
//         }`}
//       >
//         <div className="flex flex-col justify-center items-center h-full space-y-8 text-lg font-semibold text-gray-800">
//           {navItems.map(({ label, href }) => (
//             <a
//               key={label}
//               href={href}
//               onClick={toggleMenu}
//               className="hover:text-black"
//             >
//               {label}
//             </a>
//           ))}
//           <button className="bg-gray-800 text-white rounded-md px-6 py-2 font-medium" onClick={toggleMenu}>
//             Get started
//           </button>
//           {/* <button className="text-gray-800 font-medium" onClick={toggleMenu}>Sign in</button> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;





import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  
  const toggleMenu = () => setIsOpen(prev => !prev);
  
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const navItems = [
    { label: 'RESUME', href: '#resume' },
    { label: 'DASHBOARD', href: '#dashboard' },
    { label: 'PORTFOLIO BUILDER', href: '#portfolio' },
    { label: 'TESTIMONIALS', href: '#testimonials' },
    { label: 'PRICING', href: '#pricing' },
  ];
  
  return (
    <div className="fixed top-0 mt-4 left-0 right-0 w-full flex justify-center z-50">
      <motion.div
        className="w-full flex justify-center transition-all duration-300"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        style={{
          maxWidth: '100%',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <div
          className={`mt-[-5px] w-[1200px] rounded-[24px] py-2 px-6 flex items-center justify-between h-[90px] ${
            isSticky ? 'bg-white shadow-md' : 'bg-white'
          }`}
        >
          <div className="text-xl font-extrabold tracking-tight text-black">
            <img className="w-[170px]" src="/logo.png" alt="Logo" />
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-5 font-medium text-sm text-gray-700">
            {navItems.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="hover:text-black transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <button
              className="bg-black text-white rounded-[12px] px-4 py-3 border hover:bg-white hover:text-black cursor-pointer duration-200 text-sm font-medium"
            >
              Get started
            </button>
          </div>
          
          <div className="md:hidden z-50">
            <button onClick={toggleMenu}>
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </motion.div>
      
      {/* Mobile Slide-In Menu */}
      <motion.div
        className="fixed top-0 left-0 w-full h-full bg-white z-40"
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? 0 : '-100%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <div className="flex flex-col justify-center items-center h-full space-y-8 text-lg font-semibold text-gray-800">
          {navItems.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={toggleMenu}
              className="hover:text-black"
            >
              {label}
            </a>
          ))}
          <button
            className="bg-gray-800 text-white rounded-md px-6 py-2 font-medium"
            onClick={toggleMenu}
          >
            Get started
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
