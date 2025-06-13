import React, { useContext, useState, useEffect } from 'react';
import { ResumeContext } from "../../ResumeContext"; 
import { Download, Upload } from 'lucide-react';
import jsPDF from 'jspdf';

const RightPanel = () => {
  const { formData } = useContext(ResumeContext);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [fileName, setFileName] = useState('');
  const [isManuallyCreating, setIsManuallyCreating] = useState(false);

  const hasFormData = formData.personalDetails.name || formData.education.length > 0 || formData.experience.length > 0;

  // Handle PDF upload
  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      setFileName(file.name);
      const objectUrl = URL.createObjectURL(file); // Create object URL for preview
      setPreviewUrl(objectUrl);
      setUploadedFile(file);
      setIsManuallyCreating(false);
    } else {
      alert('Please upload a valid PDF file.');
    }
  };

  // Clean up object URL when component unmounts or file changes
  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  // Handle manual creation choice
  const handleManualCreation = () => {
    setIsManuallyCreating(true);
    setUploadedFile(null);
    setPreviewUrl(null);
    setFileName('');
  };

  // Handle PDF download for manually created resume
  const handleDownload = () => {
    if (!hasFormData) {
      alert('Please fill in some details to download your resume.');
      return;
    }

    const doc = new jsPDF();
    const content = document.querySelector('#resume-preview-content');

    if (content) {
      doc.html(content, {
        callback: (pdf) => {
          pdf.save(`${formData.personalDetails.name || 'Resume'}.pdf`);
        },
        x: 10,
        y: 10,
        width: 190,
        windowWidth: 600,
      });
    } else {
      alert('Error generating PDF. Please try again.');
    }
  };

  const renderPreview = () => (
    <div className="space-y-4">
      <h2 className="text-xl font-bold mb-4 text-gray-900">Resume Preview</h2>
      <div id="resume-preview-content" className="bg-white border border-gray-200 rounded-lg shadow p-6">
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
          className="px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 flex items-center"
          disabled={!hasFormData}
        >
          <Download className="mr-2 h-5 w-5" /> Download PDF
        </button>
      </div>
    </div>
  );

  const renderUploadOption = () => (
    <div className="flex flex-col ">
      <div className="bg-white border border-gray-200 rounded-lg shadow p-6 text-center">
        <h2 className="text-xl font-bold mb-4 text-gray-900">Upload Your Resume</h2>
        <p className="text-gray-600 mb-4">Upload a PDF version of your resume to get started, or create one manually.</p>
        <div className="flex flex-col items-center gap-4">
          <label className="cursor-pointer inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            <Upload className="mr-2 h-5 w-5" />
            Upload PDF
            <input type="file" accept="application/pdf" onChange={handleUpload} className="hidden" />
          </label>
          <button
            onClick={handleManualCreation}
            className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-md shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Create Manually
          </button>
        </div>
      </div>
    </div>
  );

  const renderPDFPreview = () => (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-900">Uploaded Resume Preview</h2>
        <button
          onClick={handleManualCreation}
          className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          Create Manually
        </button>
      </div>
      <div className="bg-white border border-gray-200 rounded-lg shadow overflow-hidden">
        <div className="flex items-center bg-gray-50 p-2 border-b border-gray-200">
          <span className="text-gray-700 font-medium truncate">{fileName}</span>
        </div>
        <div className="flex-1 overflow-hidden">
          {previewUrl && (
            <div className="w-full h-[calc(100vh-200px)]">
              <object
                data={previewUrl}
                type="application/pdf"
                className="w-full h-full"
              >
                <div className="flex flex-col items-center justify-center h-full bg-gray-100 p-4">
                  <p className="text-gray-600 mb-2">Unable to display PDF directly.</p>
                  <a
                    href={previewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    Open PDF
                  </a>
                </div>
              </object>
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => {
            setUploadedFile(null);
            setPreviewUrl(null);
            setFileName('');
          }}
          className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          Upload Different File
        </button>
      </div>
    </div>
  );

  const renderManualPlaceholder = () => (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="bg-white border border-gray-200 rounded-lg shadow p-6 text-center">
        <h2 className="text-xl font-bold mb-4 text-gray-900">Resume Preview</h2>
        <p className="text-gray-600">Start filling in your details on the left to see a preview of your resume here.</p>
      </div>
    </div>
  );

  const renderContent = () => {
    if (uploadedFile) {
      return renderPDFPreview();
    } else if (isManuallyCreating && hasFormData) {
      return renderPreview();
    } else if (isManuallyCreating) {
      return renderManualPlaceholder();
    } else {
      return renderUploadOption();
    }
  };

  return (
    <div className="flex h-[calc(100vh)] bg-gray-100 w-3/5">
      <div className="h-full bg-gray-100 rounded-md flex flex-col w-full">
        <div className="flex-1 min-h-0 overflow-y-auto p-4">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default RightPanel;