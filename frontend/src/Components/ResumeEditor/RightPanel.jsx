// import { useState, useEffect } from 'react';
// import { FiUpload, FiFile, FiEye } from 'react-icons/fi';

// function RightPanel() {
//   const [file, setFile] = useState(null);
//   const [previewUrl, setPreviewUrl] = useState(null);
//   const [fileName, setFileName] = useState('');

//   const handleFileUpload = (event) => {
//     const uploadedFile = event.target.files[0];
//     if (uploadedFile && uploadedFile.type === 'application/pdf') {
//       setFileName(uploadedFile.name);
      
//       // Create object URL for PDF preview
//       const objectUrl = URL.createObjectURL(uploadedFile);
//       setPreviewUrl(objectUrl);
//       setFile(uploadedFile);
//     } else if (uploadedFile) {
//       alert('Please upload a PDF file');
//     }
//   };

//   // Clean up object URL when component unmounts or when file changes
//   useEffect(() => {
//     return () => {
//       if (previewUrl) {
//         URL.revokeObjectURL(previewUrl);
//       }
//     };
//   }, [previewUrl]);

//   return (
//     <div className="flex mt-20 h-[calc(100vh-80px)] bg-gray-100 w-3/5">
//       <div className="h-full bg-gray-100 rounded-md flex flex-col w-full">
//         <div className="flex justify-between items-center p-4 border-b border-gray-200">
//           <h2 className="text-xl font-semibold">Resume Preview</h2>
//           {file && (
//             <div className="flex items-center">
//               <FiEye className="w-5 h-5 mr-2" />
//               <span>Preview</span>
//             </div>
//           )}
//         </div>

//         <div className="flex-1 overflow-hidden p-4">
//           {!file ? (
//             <div className="flex flex-col items-center justify-center h-full bg-white rounded-md border-2 border-dashed border-gray-300 p-6">
//               <FiUpload className="w-12 h-12 text-gray-400 mb-4" />
//               <p className="text-gray-600 mb-2">Upload your resume to preview</p>
//               <p className="text-gray-400 text-sm mb-4">Supported formats: PDF</p>
//               <label className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded cursor-pointer">
//                 Browse Files
//                 <input
//                   type="file"
//                   accept=".pdf"
//                   className="hidden"
//                   onChange={handleFileUpload}
//                 />
//               </label>
//             </div>
//           ) : (
//             <div className="flex flex-col h-full bg-white rounded-md overflow-hidden">
//               <div className="flex items-center bg-gray-50 p-2 border-b border-gray-200">
//                 <FiFile className="w-5 h-5 mr-2 text-gray-500" />
//                 <span className="text-gray-700 font-medium truncate">{fileName}</span>
//               </div>
//               <div className="flex-1 overflow-hidden">
//                 {previewUrl && (
//                   <div className="w-full h-full">
//                     <object
//                       data={previewUrl}
//                       type="application/pdf"
//                       className="w-full h-full"
//                     >
//                       <div className="flex flex-col items-center justify-center h-full bg-gray-100 p-4">
//                         <p className="text-gray-600 mb-2">Unable to display PDF directly.</p>
//                         <a 
//                           href={previewUrl} 
//                           target="_blank" 
//                           rel="noopener noreferrer"
//                           className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
//                         >
//                           Open PDF
//                         </a>
//                       </div>
//                     </object>
//                   </div>
//                 )}
//               </div>
//             </div>
//           )}
//         </div>

//         {file && (
//           <div className="p-4 flex justify-between items-center border-t border-gray-200">
//             <button 
//               className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
//               onClick={() => {
//                 setFile(null);
//                 setPreviewUrl(null);
//                 setFileName('');
//               }}
//             >
//               Upload Different File
//             </button>
//             <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
//               Download
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default RightPanel;

// import React, { useContext } from 'react';
// import { ResumeContext } from '../contexts/ResumeContext';
// import { Download } from 'lucide-react';

// const RightPanel = () => {
//   const { formData } = useContext(ResumeContext);

//   const handleDownload = () => {
//     // Placeholder for PDF download
//     alert('Resume download feature coming soon!');
//   };

//   const renderPreview = () => (
//     <div className="space-y-4">
//       <h2 className="text-xl font-bold mb-4">Resume Preview</h2>
//       <div className="bg-white border border-gray-200 rounded-lg shadow p-6">
//         <div className="space-y-4">
//           <div className="border-b pb-4">
//             <h1 className="text-2xl font-bold text-center">{formData.personalDetails.name}</h1>
//             <div className="flex flex-wrap justify-center gap-2 mt-2 text-sm">
//               <span>{formData.personalDetails.location}</span>
//               <span>—</span>
//               <span>{formData.personalDetails.phone}</span>
//               <div className="w-full text-center mt-1">
//                 <span className="mx-1">📧 {formData.personalDetails.email}</span>
//                 <span className="mx-1">🔗 {formData.personalDetails.linkedin}</span>
//               </div>
//             </div>
//           </div>
//           {formData.education.length > 0 && (
//             <div>
//               <h2 className="text-lg font-bold border-b mb-2">Education</h2>
//               {formData.education.map((edu, index) => (
//                 <div key={index} className="mb-3">
//                   <div className="flex justify-between">
//                     <div className="font-semibold">{edu.institution}</div>
//                     <div>{edu.startDate} – {edu.endDate}</div>
//                   </div>
//                   <div className="flex justify-between">
//                     <div>{edu.degree} in {edu.field}</div>
//                     <div>{edu.location}</div>
//                   </div>
//                   {edu.gpa && <div className="text-sm">• CGPA: {edu.gpa}</div>}
//                   {edu.relevantCourses && (
//                     <div className="text-sm mt-1">
//                       <span className="font-semibold">Relevant Coursework:</span><br />• {edu.relevantCourses}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           )}
//           {formData.professionalSummary && (
//             <div>
//               <h2 className="text-lg font-bold border-b mb-2">Professional Summary</h2>
//               <p className="text-sm">{formData.professionalSummary}</p>
//             </div>
//           )}
//           {formData.experience.length > 0 && (
//             <div>
//               <h2 className="text-lg font-bold border-b mb-2">Experience</h2>
//               {formData.experience.map((exp, index) => (
//                 <div key={index} className="mb-3">
//                   <div className="flex justify-between">
//                     <div className="font-semibold">{exp.title} {exp.company && `(${exp.company})`}</div>
//                     <div>{exp.startDate} – {exp.endDate}</div>
//                   </div>
//                   {exp.description && <div className="text-sm mt-1">{exp.description}</div>}
//                   {exp.achievements?.filter(a => a).length > 0 && (
//                     <ul className="list-disc list-inside text-sm mt-1 pl-1">
//                       {exp.achievements.filter(a => a).map((achievement, i) => (
//                         <li key={i}>• {achievement}</li>
//                       ))}
//                     </ul>
//                   )}
//                 </div>
//               ))}
//             </div>
//           )}
//           {formData.projects.length > 0 && (
//             <div>
//               <h2 className="text-lg font-bold border-b mb-2">Projects</h2>
//               {formData.projects.map((project, index) => (
//                 <div key={index} className="mb-3">
//                   <div className="flex justify-between">
//                     <div className="font-semibold">{project.name} | {project.technologies}</div>
//                     {project.liveLink && (
//                       <div className="text-sm">
//                         <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
//                           Live Link
//                         </a>
//                       </div>
//                     )}
//                   </div>
//                   {project.description && <div className="text-sm mt-1">{project.description}</div>}
//                   {project.achievements?.filter(a => a).length > 0 && (
//                     <ul className="list-disc list-inside text-sm mt-1 pl-1">
//                       {project.achievements.filter(a => a).map((achievement, i) => (
//                         <li key={i}>• {achievement}</li>
//                       ))}
//                     </ul>
//                   )}
//                 </div>
//               ))}
//             </div>
//           )}
//           {Object.values(formData.skills).some(value => value) && (
//             <div>
//               <h2 className="text-lg font-bold border-b mb-2">Technical Skills</h2>
//               <div className="text-sm space-y-1">
//                 {formData.skills.languages && <div><span className="font-semibold">Languages:</span> {formData.skills.languages}</div>}
//                 {formData.skills.frameworks && <div><span className="font-semibold">Framework:</span> {formData.skills.frameworks}</div>}
//                 {formData.skills.devTools && <div><span className="font-semibold">Developer Tools:</span> {formData.skills.devTools}</div>}
//                 {formData.skills.databases && <div><span className="font-semibold">Database:</span> {formData.skills.databases}</div>}
//               </div>
//             </div>
//           )}
//           {formData.certifications.length > 0 && formData.certifications.some(cert => cert.name) && (
//             <div>
//               <h2 className="text-lg font-bold border-b mb-2">Certifications</h2>
//               {formData.certifications.filter(cert => cert.name).map((cert, index) => (
//                 <div key={index} className="mb-2">
//                   <div className="flex justify-between">
//                     <div className="font-semibold">{cert.name}{cert.issuer && ` - ${cert.issuer}`}</div>
//                     <div>{cert.date}</div>
//                   </div>
//                   {cert.link && (
//                     <div className="text-sm">
//                       <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
//                         View Credential
//                       </a>
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           )}
//           {formData.achievements.filter(a => a).length > 0 && (
//             <div>
//               <h2 className="text-lg font-bold border-b mb-2">Achievements</h2>
//               <ul className="list-disc list-inside text-sm pl-1">
//                 {formData.achievements.filter(a => a).map((achievement, index) => (
//                   <li key={index}>• {achievement}</li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//       </div>
//       <div className="flex justify-center mt-6">
//         <button
//           type="button"
//           onClick={handleDownload}
//           className="px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 flex items-center"
//         >
//           <Download className="mr-2 h-5 w-5" /> Download PDF
//         </button>
//       </div>
//     </div>
//   );

//   return (
//     <div className="flex mt-20 h-[calc(100vh-80px)] bg-gray-100 w-3/5">
//       <div className="h-full bg-gray-100 rounded-md flex flex-col w-full">
//         <div className="flex justify-between items-center p-4 border-b border-gray-200">
//           <h2 className="text-xl font-semibold">Resume Preview</h2>
//         </div>
//         <div className="flex-1 overflow-y-auto p-4">
//           {renderPreview()}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default RightPanel;

import React, { useContext } from 'react';
import { ResumeContext } from "../../ResumeContext"; 
import { Download } from 'lucide-react';

const RightPanel = () => {
  const { formData } = useContext(ResumeContext);

  const handleDownload = () => {
    // Placeholder for PDF download
    alert('Resume download feature coming soon!');
  };

  const renderPreview = () => (
    <div className="space-y-4">
      <h2 className="text-xl font-bold mb-4">Resume Preview</h2>
      <div className="bg-white border border-gray-200 rounded-lg shadow p-6">
        <div className="space-y-4">
          <div className="border-b pb-4">
            <h1 className="text-2xl font-bold text-center">{formData.personalDetails.name}</h1>
            <div className="flex flex-wrap justify-center gap-2 mt-2 text-sm">
              <span>{formData.personalDetails.location}</span>
              <span>—</span>
              <span>{formData.personalDetails.phone}</span>
              <div className="w-full text-center mt-1">
                <span className="mx-1">📧 {formData.personalDetails.email}</span>
                <span className="mx-1">🔗 {formData.personalDetails.linkedin}</span>
              </div>
            </div>
          </div>
          {formData.education.length > 0 && (
            <div>
              <h2 className="text-lg font-bold border-b mb-2">Education</h2>
              {formData.education.map((edu, index) => (
                <div key={index} className="mb-3">
                  <div className="flex justify-between">
                    <div className="font-semibold">{edu.institution}</div>
                    <div>{edu.startDate} – {edu.endDate}</div>
                  </div>
                  <div className="flex justify-between">
                    <div>{edu.degree} in {edu.field}</div>
                    <div>{edu.location}</div>
                  </div>
                  {edu.gpa && <div className="text-sm">• CGPA: {edu.gpa}</div>}
                  {edu.relevantCourses && (
                    <div className="text-sm mt-1">
                      <span className="font-semibold">Relevant Coursework:</span><br />• {edu.relevantCourses}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
          {formData.professionalSummary && (
            <div>
              <h2 className="text-lg font-bold border-b mb-2">Professional Summary</h2>
              <p className="text-sm">{formData.professionalSummary}</p>
            </div>
          )}
          {formData.experience.length > 0 && (
            <div>
              <h2 className="text-lg font-bold border-b mb-2">Experience</h2>
              {formData.experience.map((exp, index) => (
                <div key={index} className="mb-3">
                  <div className="flex justify-between">
                    <div className="font-semibold">{exp.title} {exp.company && `(${exp.company})`}</div>
                    <div>{exp.startDate} – {exp.endDate}</div>
                  </div>
                  {exp.description && <div className="text-sm mt-1">{exp.description}</div>}
                  {exp.achievements?.filter(a => a).length > 0 && (
                    <ul className="list-disc list-inside text-sm mt-1 pl-1">
                      {exp.achievements.filter(a => a).map((achievement, i) => (
                        <li key={i}>• {achievement}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}
          {formData.projects.length > 0 && (
            <div>
              <h2 className="text-lg font-bold border-b mb-2">Projects</h2>
              {formData.projects.map((project, index) => (
                <div key={index} className="mb-3">
                  <div className="flex justify-between">
                    <div className="font-semibold">{project.name} | {project.technologies}</div>
                    {project.liveLink && (
                      <div className="text-sm">
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                          Live Link
                        </a>
                      </div>
                    )}
                  </div>
                  {project.description && <div className="text-sm mt-1">{project.description}</div>}
                  {project.achievements?.filter(a => a).length > 0 && (
                    <ul className="list-disc list-inside text-sm mt-1 pl-1">
                      {project.achievements.filter(a => a).map((achievement, i) => (
                        <li key={i}>• {achievement}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}
          {Object.values(formData.skills).some(value => value) && (
            <div>
              <h2 className="text-lg font-bold border-b mb-2">Technical Skills</h2>
              <div className="text-sm space-y-1">
                {formData.skills.languages && <div><span className="font-semibold">Languages:</span> {formData.skills.languages}</div>}
                {formData.skills.frameworks && <div><span className="font-semibold">Framework:</span> {formData.skills.frameworks}</div>}
                {formData.skills.devTools && <div><span className="font-semibold">Developer Tools:</span> {formData.skills.devTools}</div>}
                {formData.skills.databases && <div><span className="font-semibold">Database:</span> {formData.skills.databases}</div>}
              </div>
            </div>
          )}
          {formData.certifications.length > 0 && formData.certifications.some(cert => cert.name) && (
            <div>
              <h2 className="text-lg font-bold border-b mb-2">Certifications</h2>
              {formData.certifications.filter(cert => cert.name).map((cert, index) => (
                <div key={index} className="mb-2">
                  <div className="flex justify-between">
                    <div className="font-semibold">{cert.name}{cert.issuer && ` - ${cert.issuer}`}</div>
                    <div>{cert.date}</div>
                  </div>
                  {cert.link && (
                    <div className="text-sm">
                      <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        View Credential
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
          {formData.achievements.filter(a => a).length > 0 && (
            <div>
              <h2 className="text-lg font-bold border-b mb-2">Achievements</h2>
              <ul className="list-disc list-inside text-sm pl-1">
                {formData.achievements.filter(a => a).map((achievement, index) => (
                  <li key={index}>• {achievement}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <button
          type="button"
          onClick={handleDownload}
          className="px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 flex items-center"
        >
          <Download className="mr-2 h-5 w-5" /> Download PDF
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex mt-20 h-[calc(100vh-80px)] bg-gray-100 w-3/5">
      <div className="h-full bg-gray-100 rounded-md flex flex-col w-full">
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold">Resume Preview</h2>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          {renderPreview()}
        </div>
      </div>
    </div>
  );
};

export default RightPanel;