import React, { createContext, useState } from 'react';

export const ResumeContext = createContext();

export const ResumeProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    personalDetails: { name: '', location: '', phone: '', email: '', linkedin: '' },
    education: [{ institution: '', degree: '', field: '', location: '', startDate: '', endDate: '', gpa: '', relevantCourses: '' }],
    professionalSummary: '',
    experience: [{ title: '', company: '', startDate: '', endDate: '', description: '', achievements: [''] }],
    projects: [{ name: '', technologies: '', liveLink: '', description: '', achievements: [''] }],
    certifications: [{ name: '', issuer: '', date: '', link: '' }],
    skills: { languages: '', frameworks: '', devTools: '', databases: '' },
    achievements: [''],
  });

  return (
    <ResumeContext.Provider value={{ formData, setFormData }}>
      {children}
    </ResumeContext.Provider>
  );
};