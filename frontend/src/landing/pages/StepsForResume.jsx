// import React from 'react';

// const StepsForResume = () => {
//   return (
//     <div className="flex flex-col items-center justify-center mt-[70px] space-y-10">
//       {/* Heading */}
//       <h1 className="font-bold text-5xl text-center mb-[50px]">
//         🎯 Build Your Resume in 6 Simple Steps
//       </h1>

//       {/* Images Section */}
//       <div className="flex justify-center relative z-0">
//         <div className="flex  flex-row space-x-5">
//           <div className='flex items-center'>
//             <img className='rounded-xl h-[182px] w-[182px]' src="/images/6Steps01.png" alt="Step 1" />
//           </div>
//           <div className='bg-white w-[258px] h-[246px] rounded-xl'>
//             <div className='items-center justify-center ml-5 mt-5 flex w-[45px] h-[38px] bg-[#D9D9D9] rounded-lg'>
//               01
//             </div>
//             <div className='ml-5 font-bold text-lg my-5'>Upload Your Resume</div>
//             <div className='ml-5'>Start by uploading your existing resume or creating a new one from scratch.</div>
//           </div>
//           <div className='bg-white w-[258px] h-[246px] rounded-xl'>
//             <div className='items-center justify-center ml-5 mt-5 flex w-[45px] h-[38px] bg-[#D9D9D9] rounded-lg'>
//               02
//             </div>
//             <div className='ml-5 font-bold text-lg my-5'>Choose a Template</div>
//             <div className='ml-5'>Pick from professionally designed, ATS-friendly templates that suit your style.</div>
//           </div>
//           <div className='bg-white w-[258px] h-[246px] rounded-xl'>
//             <div className='items-center justify-center ml-5 mt-5 flex w-[45px] h-[38px] bg-[#D9D9D9] rounded-lg'>
//               03
//             </div>
//             <div className='ml-5 font-bold text-lg my-5'>Analyze with AI</div>
//             <div className='ml-5'>Job Genie scans your resume and compares it with your target job description.</div>
//           </div>
//           <div className='flex items-center'>
//             <img className='rounded-xl h-[182px] w-[182px]' src="/images/6Steps03.png" alt="Step 5" />
//           </div>
//         </div>
//       </div>



//       <div className="flex justify-center relative z-0">
//         <div className="flex  flex-row space-x-5">
//           <div className='flex items-center'>
//             <img className='rounded-xl h-[182px] w-[182px]' src="/images/6Steps02.png" alt="Step 1" />
//           </div>
//           <div className='bg-white w-[258px] h-[246px] rounded-xl'>
//             <div className='items-center justify-center ml-5 mt-5 flex w-[45px] h-[38px] bg-[#D9D9D9] rounded-lg'>
//               04
//             </div>
//             <div className='ml-5 font-bold text-lg my-5'>Get ATS Score & Suggestions</div>
//             <div className='ml-5'>Get instant feedback, match score, and personalized improvement tips.</div>
//           </div>
//           <div className='bg-white w-[258px] h-[246px] rounded-xl'>
//             <div className='items-center justify-center ml-5 mt-5 flex w-[45px] h-[38px] bg-[#D9D9D9] rounded-lg'>
//               05
//             </div>
//             <div className='ml-5 font-bold text-lg my-5'>Apply AI Improvements</div>
//             <div className='ml-5'>Edit your resume with one-click AI suggestions to improve relevance and formatting.</div>
//           </div>
//           <div className='bg-white w-[258px] h-[246px] rounded-xl'>
//             <div className='items-center justify-center ml-5 mt-5 flex w-[45px] h-[38px] bg-[#D9D9D9] rounded-lg'>
//               06
//             </div>
//             <div className='ml-5 font-bold text-lg my-5'>Download Your Portfolio</div>
//             <div className='ml-5'>Download your optimized resume or create a personal portfolio website in minutes.</div>
//           </div>
//           <div className='flex items-center'>
//             <img className='rounded-xl h-[182px] w-[182px]' src="/images/6Steps04.png" alt="Step 5" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StepsForResume;







import React from 'react';
import { motion } from 'framer-motion';

const zoomIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut'
    }
  }
};

const StepsForResume = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-[70px]">
      {/* Heading */}
      <h1 className="font-bold text-5xl text-center mb-[30px]">
        🎯 Build Your Resume in 6 Simple Steps
      </h1>

      {/* First Row */}
      <motion.div
        className="flex justify-center relative z-0"
        variants={zoomIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="flex flex-row space-x-5 mb-7">
          <div className="flex items-center">
            <img className="rounded-xl h-[182px] w-[182px]" src="/images/6Steps01.png" alt="Step 1" />
          </div>
          {[
            {
              num: '01',
              title: 'Upload Your Resume',
              desc: 'Start by uploading your existing resume or creating a new one from scratch.'
            },
            {
              num: '02',
              title: 'Choose a Template',
              desc: 'Pick from professionally designed, ATS-friendly templates that suit your style.'
            },
            {
              num: '03',
              title: 'Analyze with AI',
              desc: 'Job Genie scans your resume and compares it with your target job description.'
            }
          ].map((step, idx) => (
            <div key={idx} className="bg-white w-[258px] h-[246px] rounded-xl">
              <div className="items-center justify-center ml-5 mt-5 flex w-[45px] h-[38px] bg-[#D9D9D9] rounded-lg">
                {step.num}
              </div>
              <div className="ml-5 font-bold text-lg my-5">{step.title}</div>
              <div className="ml-5">{step.desc}</div>
            </div>
          ))}
          <div className="flex items-center">
            <img className="rounded-xl h-[182px] w-[182px]" src="/images/6Steps03.png" alt="Step 4" />
          </div>
        </div>
      </motion.div>

      {/* Second Row */}
      <motion.div
        className="flex justify-center relative z-0"
        variants={zoomIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="flex flex-row space-x-5">
          <div className="flex items-center">
            <img className="rounded-xl h-[182px] w-[182px]" src="/images/6Steps02.png" alt="Step 5" />
          </div>
          {[
            {
              num: '04',
              title: 'Get ATS Score & Suggestions',
              desc: 'Get instant feedback, match score, and personalized improvement tips.'
            },
            {
              num: '05',
              title: 'Apply AI Improvements',
              desc: 'Edit your resume with one-click AI suggestions to improve relevance and formatting.'
            },
            {
              num: '06',
              title: 'Download Your Portfolio',
              desc: 'Download your optimized resume or create a personal portfolio website in minutes.'
            }
          ].map((step, idx) => (
            <div key={idx} className="bg-white w-[258px] h-[246px] rounded-xl">
              <div className="items-center justify-center ml-5 mt-5 flex w-[45px] h-[38px] bg-[#D9D9D9] rounded-lg">
                {step.num}
              </div>
              <div className="ml-5 font-bold text-lg my-5">{step.title}</div>
              <div className="ml-5">{step.desc}</div>
            </div>
          ))}
          <div className="flex items-center">
            <img className="rounded-xl h-[182px] w-[182px]" src="/images/6Steps04.png" alt="Step 6" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default StepsForResume;
