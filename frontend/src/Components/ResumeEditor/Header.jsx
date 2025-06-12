
import React, { useState, useContext } from 'react';
import { ResumeContext } from "../../ResumeContext"; 
import { IoChevronBack } from 'react-icons/io5';
import { FaUser, FaGraduationCap, FaBriefcase, FaFolderOpen, FaCertificate } from 'react-icons/fa';
import { BsLightningFill } from 'react-icons/bs';
import { LuClipboardCheck } from 'react-icons/lu';
import { Save, X } from 'lucide-react';

const Header = () => {
  const { formData, setFormData } = useContext(ResumeContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedResume, setSelectedResume] = useState('Aakash_Shaw_Resume.pdf');
  const [activeSection, setActiveSection] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);

  const sections = [
    'personalDetails', 'education', 'professionalSummary', 'experience',
    'projects', 'certifications', 'skills', 'achievements'
  ];

  const savedResumes = [
    'Aakash_Shaw_Resume.pdf', 'AakashShaw_Resume_LinkedIn.pdf',
    'AakashShaw_Frontend.pdf', 'AakashShaw_Backend.pdf'
  ];

  const sectionButtons = [
    { icon: <FaUser />, label: 'Personal Details', section: 'personalDetails' },
    { icon: <FaGraduationCap />, label: 'Education', section: 'education' },
    { icon: <FaBriefcase />, label: 'Professional Summary', section: 'professionalSummary' },
    { icon: <FaBriefcase />, label: 'Experience', section: 'experience' },
    { icon: <FaFolderOpen />, label: 'Projects', section: 'projects' },
    { icon: <FaCertificate />, label: 'Certification', section: 'certifications' },
    { icon: <BsLightningFill />, label: 'Skills', section: 'skills' },
    { icon: <LuClipboardCheck />, label: 'Achievements', section: 'achievements' },
  ];

  const toggleDropdown = () => setShowDropdown(prev => !prev);

  const handleResumeSelect = (resume) => {
    setSelectedResume(resume);
    setShowDropdown(false);
  };

  const handleSectionClick = (section, index) => {
    setActiveSection(section);
    setCurrentStep(index);
  };

  const closeModal = () => {
    setActiveSection(null);
    setCurrentStep(0);
  };

const nextStep = () => {
  if (currentStep < sections.length - 1) {
    setCurrentStep(currentStep + 1);
    setActiveSection(sections[currentStep + 1]);
  } else {
    closeModal();
  }
};


  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setActiveSection(sections[currentStep - 1]);
    }
  };

  const saveProgress = () => {
    localStorage.setItem('resumeData', JSON.stringify(formData));
    alert('Progress saved successfully!');
  };

  // Form handling functions
  const handlePersonalDetailsChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      personalDetails: { ...formData.personalDetails, [name]: value },
    });
  };

  const handleEducationChange = (index, e) => {
    const { name, value } = e.target;
    const newEducation = [...formData.education];
    newEducation[index] = { ...newEducation[index], [name]: value };
    setFormData({ ...formData, education: newEducation });
  };

  const addEducation = () => {
    setFormData({
      ...formData,
      education: [...formData.education, {
        institution: '', degree: '', field: '', location: '',
        startDate: '', endDate: '', gpa: '', relevantCourses: ''
      }],
    });
  };

  const removeEducation = (index) => {
    const newEducation = [...formData.education];
    newEducation.splice(index, 1);
    setFormData({ ...formData, education: newEducation });
  };

  const handleSummaryChange = (e) => {
    setFormData({ ...formData, professionalSummary: e.target.value });
  };

  const handleExperienceChange = (index, e) => {
    const { name, value } = e.target;
    const newExperience = [...formData.experience];
    newExperience[index] = { ...newExperience[index], [name]: value };
    setFormData({ ...formData, experience: newExperience });
  };

  const handleExperienceAchievementChange = (expIndex, achievementIndex, value) => {
    const newExperience = [...formData.experience];
    if (expIndex >= 0 && expIndex < newExperience.length) {
      if (!newExperience[expIndex].achievements) {
        newExperience[expIndex].achievements = [''];
      }
      if (achievementIndex >= 0 && achievementIndex < newExperience[expIndex].achievements.length) {
        newExperience[expIndex].achievements[achievementIndex] = value;
        setFormData({ ...formData, experience: newExperience });
      }
    }
  };

  const addExperienceAchievement = (expIndex) => {
    const newExperience = [...formData.experience];
    if (expIndex >= 0 && expIndex < newExperience.length) {
      if (!newExperience[expIndex].achievements) {
        newExperience[expIndex].achievements = [''];
      }
      newExperience[expIndex].achievements.push('');
      setFormData({ ...formData, experience: newExperience });
    }
  };

  const removeExperienceAchievement = (expIndex, achievementIndex) => {
    const newExperience = [...formData.experience];
    if (expIndex >= 0 && expIndex < newExperience.length &&
        newExperience[expIndex].achievements && newExperience[expIndex].achievements.length > 1 &&
        achievementIndex >= 0 && achievementIndex < newExperience[expIndex].achievements.length) {
      newExperience[expIndex].achievements.splice(achievementIndex, 1);
      setFormData({ ...formData, experience: newExperience });
    }
  };

  const addExperience = () => {
    setFormData({
      ...formData,
      experience: [
        ...formData.experience,
        {
          title: '',
          company: '',
          startDate: '',
          endDate: '',
          description: '',
          achievements: ['']
        },
      ],
    });
  };

  const removeExperience = (index) => {
    const newExperience = [...formData.experience];
    if (index >= 0 && index < newExperience.length) {
      newExperience.splice(index, 1);
      setFormData({ ...formData, experience: newExperience });
    }
  };

  const handleProjectChange = (index, e) => {
    const { name, value } = e.target;
    const newProjects = [...formData.projects];
    newProjects[index] = { ...newProjects[index], [name]: value };
    setFormData({ ...formData, projects: newProjects });
  };

  const handleProjectAchievementChange = (projIndex, achievementIndex, value) => {
    const newProjects = [...formData.projects];
    if (projIndex >= 0 && projIndex < newProjects.length) {
      if (!newProjects[projIndex].achievements) {
        newProjects[projIndex].achievements = [''];
      }
      if (achievementIndex >= 0 && achievementIndex < newProjects[projIndex].achievements.length) {
        newProjects[projIndex].achievements[achievementIndex] = value;
        setFormData({ ...formData, projects: newProjects });
      }
    }
  };

  const addProjectAchievement = (projIndex) => {
    const newProjects = [...formData.projects];
    if (projIndex >= 0 && projIndex < newProjects.length) {
      if (!newProjects[projIndex].achievements) {
        newProjects[projIndex].achievements = [''];
      }
      newProjects[projIndex].achievements.push('');
      setFormData({ ...formData, projects: newProjects });
    }
  };

  const removeProjectAchievement = (projIndex, achievementIndex) => {
    const newProjects = [...formData.projects];
    if (projIndex >= 0 && projIndex < newProjects.length &&
        newProjects[projIndex].achievements && newProjects[projIndex].achievements.length > 1 &&
        achievementIndex >= 0 && achievementIndex < newProjects[projIndex].achievements.length) {
      newProjects[projIndex].achievements.splice(achievementIndex, 1);
      setFormData({ ...formData, projects: newProjects });
    }
  };

  const addProject = () => {
    setFormData({
      ...formData,
      projects: [
        ...formData.projects,
        {
          name: '',
          technologies: '',
          liveLink: '',
          description: '',
          achievements: ['']
        },
      ],
    });
  };

  const removeProject = (index) => {
    const newProjects = [...formData.projects];
    if (index >= 0 && index < newProjects.length) {
      newProjects.splice(index, 1);
      setFormData({ ...formData, projects: newProjects });
    }
  };

  const handleCertificationChange = (index, e) => {
    const { name, value } = e.target;
    const newCertifications = [...formData.certifications];
    newCertifications[index] = { ...newCertifications[index], [name]: value };
    setFormData({ ...formData, certifications: newCertifications });
  };

  const addCertification = () => {
    setFormData({
      ...formData,
      certifications: [
        ...formData.certifications,
        { name: '', issuer: '', date: '', link: '' }
      ],
    });
  };

  const removeCertification = (index) => {
    const newCertifications = [...formData.certifications];
    if (index >= 0 && index < newCertifications.length) {
      newCertifications.splice(index, 1);
      setFormData({ ...formData, certifications: newCertifications });
    }
  };

  const handleSkillChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      skills: { ...formData.skills, [name]: value },
    });
  };

  const handleAchievementChange = (index, value) => {
    const newAchievements = [...formData.achievements];
    if (index >= 0 && index < newAchievements.length) {
      newAchievements[index] = value;
      setFormData({ ...formData, achievements: newAchievements });
    }
  };

  const addAchievement = () => {
    setFormData({
      ...formData,
      achievements: [...formData.achievements, '']
    });
  };

  const removeAchievement = (index) => {
    const newAchievements = [...formData.achievements];
    if (index >= 0 && index < newAchievements.length && newAchievements.length > 1) {
      newAchievements.splice(index, 1);
      setFormData({ ...formData, achievements: newAchievements });
    }
  };

  // Form render functions
  const renderPersonalDetailsForm = () => (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Personal Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.personalDetails.name}
            onChange={handlePersonalDetailsChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <input
            type="text"
            name="location"
            value={formData.personalDetails.location}
            onChange={handlePersonalDetailsChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
            placeholder="City, State, Country"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.personalDetails.phone}
            onChange={handlePersonalDetailsChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
            placeholder="1234567890"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.personalDetails.email}
            onChange={handlePersonalDetailsChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
            placeholder="example@email.com"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">LinkedIn URL</label>
          <input
            type="text"
            name="linkedin"
            value={formData.personalDetails.linkedin}
            onChange={handlePersonalDetailsChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
            placeholder="linkedin.com/in/johndoe"
          />
        </div>
      </div>
    </div>
  );

  const renderEducationForm = () => (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Education</h2>
      {formData.education.map((edu, index) => (
        <div key={index} className="border rounded-md p-4 space-y-4 bg-gray-50">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Education #{index + 1}</h3>
            {formData.education.length > 1 && (
              <button
                type="button"
                onClick={() => removeEducation(index)}
                className="text-red-600 hover:text-red-800"
              >
                Remove
              </button>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Institution</label>
              <input
                type="text"
                name="institution"
                value={edu.institution}
                onChange={(e) => handleEducationChange(index, e)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                placeholder="University Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Degree</label>
              <input
                type="text"
                name="degree"
                value={edu.degree}
                onChange={(e) => handleEducationChange(index, e)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                placeholder="Bachelor of Technology"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Field of Study</label>
              <input
                type="text"
                name="field"
                value={edu.field}
                onChange={(e) => handleEducationChange(index, e)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                placeholder="Information Technology"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Location</label>
              <input
                type="text"
                name="location"
                value={edu.location}
                onChange={(e) => handleEducationChange(index, e)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                placeholder="City, State, Country"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Start Date</label>
              <input
                type="text"
                name="startDate"
                value={edu.startDate}
                onChange={(e) => handleEducationChange(index, e)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                placeholder="Aug 2021"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">End Date</label>
              <input
                type="text"
                name="endDate"
                value={edu.endDate}
                onChange={(e) => handleEducationChange(index, e)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                placeholder="July 2025"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">GPA</label>
              <input
                type="text"
                name="gpa"
                value={edu.gpa}
                onChange={(e) => handleEducationChange(index, e)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                placeholder="8.22"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Relevant Courses</label>
              <textarea
                name="relevantCourses"
                value={edu.relevantCourses}
                onChange={(e) => handleEducationChange(index, e)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                placeholder="Data Structures and Algorithms, Object Oriented Programming, etc."
                rows={3}
              />
            </div>
          </div>
        </div>
      ))}
      <button
        type="button"
        onClick={addEducation}
        className="mt-2 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Add Education
      </button>
    </div>
  );

  const renderSummaryForm = () => (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Professional Summary</h2>
      <div>
        <label className="block text-sm font-medium text-gray-700">Summary (Optional)</label>
        <textarea
          value={formData.professionalSummary}
          onChange={handleSummaryChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
          placeholder="A brief summary of your professional background and key skills..."
          rows={5}
        />
      </div>
    </div>
  );

  const renderExperienceForm = () => (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Work Experience</h2>
      {formData.experience.map((exp, expIndex) => (
        <div key={expIndex} className="border rounded-md p-4 space-y-4 bg-gray-50">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Experience #{expIndex + 1}</h3>
            {formData.experience.length > 1 && (
              <button
                type="button"
                onClick={() => removeExperience(expIndex)}
                className="text-red-600 hover:text-red-800"
              >
                Remove
              </button>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Job Title</label>
              <input
                type="text"
                name="title"
                value={exp.title}
                onChange={(e) => handleExperienceChange(expIndex, e)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                placeholder="Frontend Developer"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Company</label>
              <input
                type="text"
                name="company"
                value={exp.company}
                onChange={(e) => handleExperienceChange(expIndex, e)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                placeholder="Company Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Start Date</label>
              <input
                type="text"
                name="startDate"
                value={exp.startDate}
                onChange={(e) => handleExperienceChange(expIndex, e)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                placeholder="Jan 2025"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">End Date</label>
              <input
                type="text"
                name="endDate"
                value={exp.endDate}
                onChange={(e) => handleExperienceChange(expIndex, e)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                placeholder="Feb 2025 or Present"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                name="description"
                value={exp.description}
                onChange={(e) => handleExperienceChange(expIndex, e)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                placeholder="Brief description of your role..."
                rows={2}
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Key Achievements</label>
            {exp.achievements.map((achievement, achievementIndex) => (
              <div key={achievementIndex} className="flex items-center gap-2">
                <input
                  type="text"
                  value={achievement}
                  onChange={(e) => handleExperienceAchievementChange(expIndex, achievementIndex, e.target.value)}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                  placeholder="Developed, implemented, optimized..."
                />
                {exp.achievements.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeExperienceAchievement(expIndex, achievementIndex)}
                    className="text-red-600 hover:text-red-800"
                  >
                    -
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={() => addExperienceAchievement(expIndex)}
              className="px-3 py-1 text-sm border border-transparent rounded-md shadow-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Add Achievement
            </button>
          </div>
        </div>
      ))}
      <button
        type="button"
        onClick={addExperience}
        className="mt-2 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Add Experience
      </button>
    </div>
  );

  const renderProjectsForm = () => (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Projects</h2>
      {formData.projects.map((project, projIndex) => (
        <div key={projIndex} className="border rounded-md p-4 space-y-4 bg-gray-50">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Project #{projIndex + 1}</h3>
            {formData.projects.length > 1 && (
              <button
                type="button"
                onClick={() => removeProject(projIndex)}
                className="text-red-600 hover:text-red-800"
              >
                Remove
              </button>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Project Name</label>
              <input
                type="text"
                name="name"
                value={project.name}
                onChange={(e) => handleProjectChange(projIndex, e)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                placeholder="Project Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Technologies Used</label>
              <input
                type="text"
                name="technologies"
                value={project.technologies}
                onChange={(e) => handleProjectChange(projIndex, e)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                placeholder="React.js, Node.js, Express.js, MongoDB"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Live Link (Optional)</label>
              <input
                type="text"
                name="liveLink"
                value={project.liveLink}
                onChange={(e) => handleProjectChange(projIndex, e)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                placeholder="https://your-project.com"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Project Description</label>
              <textarea
                name="description"
                value={project.description}
                onChange={(e) => handleProjectChange(projIndex, e)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                placeholder="Brief description of your project..."
                rows={2}
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Key Features/Achievements</label>
            {project.achievements.map((achievement, achievementIndex) => (
              <div key={achievementIndex} className="flex items-center gap-2">
                <input
                  type="text"
                  value={achievement}
                  onChange={(e) => handleProjectAchievementChange(projIndex, achievementIndex, e.target.value)}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                  placeholder="Implemented, created, designed..."
                />
                {project.achievements.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeProjectAchievement(projIndex, achievementIndex)}
                    className="text-red-600 hover:text-red-800"
                  >
                    -
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={() => addProjectAchievement(projIndex)}
              className="px-3 py-1 text-sm border border-transparent rounded-md shadow-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Add Feature/Achievement
            </button>
          </div>
        </div>
      ))}
      <button
        type="button"
        onClick={addProject}
        className="mt-2 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Add Project
      </button>
    </div>
  );

  const renderCertificationsForm = () => (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Certifications (Optional)</h2>
      {formData.certifications.map((cert, index) => (
        <div key={index} className="border rounded-md p-4 space-y-4 bg-gray-50">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Certification #{index + 1}</h3>
            {formData.certifications.length > 1 && (
              <button
                type="button"
                onClick={() => removeCertification(index)}
                className="text-red-600 hover:text-red-800"
              >
                Remove
              </button>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Certification Name</label>
              <input
                type="text"
                name="name"
                value={cert.name}
                onChange={(e) => handleCertificationChange(index, e)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                placeholder="AWS Certified Developer"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Issuing Organization</label>
              <input
                type="text"
                name="issuer"
                value={cert.issuer}
                onChange={(e) => handleCertificationChange(index, e)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                placeholder="Amazon Web Services"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Date</label>
              <input
                type="text"
                name="date"
                value={cert.date}
                onChange={(e) => handleCertificationChange(index, e)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                placeholder="June 2024"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Link (Optional)</label>
              <input
                type="text"
                name="link"
                value={cert.link}
                onChange={(e) => handleCertificationChange(index, e)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                placeholder="https://credential-url.com"
              />
            </div>
          </div>
        </div>
      ))}
      <button
        type="button"
        onClick={addCertification}
        className="mt-2 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Add Certification
      </button>
    </div>
  );

  const renderSkillsForm = () => (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">Technical Skills</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Programming Languages</label>
          <input
            type="text"
            name="languages"
            value={formData.skills.languages}
            onChange={handleSkillChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
            placeholder="Java, C++, JavaScript, HTML, CSS, SQL"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Frameworks/Libraries</label>
          <input
            type="text"
            name="frameworks"
            value={formData.skills.frameworks}
            onChange={handleSkillChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
            placeholder="React JS, Tailwind CSS, Express.js, Node.js"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Developer Tools</label>
          <input
            type="text"
            name="devTools"
            value={formData.skills.devTools}
            onChange={handleSkillChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Databases</label>
          <input
            type="text"
            name="databases"
            value={formData.skills.databases}
            onChange={handleSkillChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
            placeholder="MySQL, Firebase, MongoDB"
          />
        </div>
      </div>
    </div>
  );

  const renderAchievementsForm = () => (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Achievements</h2>
      <div className="space-y-2">
        {formData.achievements.map((achievement, index) => (
          <div key={index} className="flex items-center gap-2">
            <input
              type="text"
              value={achievement}
              onChange={(e) => handleAchievementChange(index, e.target.value)}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
              placeholder="Add an achievement..."
            />
            {formData.achievements.length > 1 && (
              <button
                type="button"
                onClick={() => removeAchievement(index)}
                className="text-red-600 hover:text-red-800"
              >
                -
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={addAchievement}
          className="px-3 py-1 text-sm border border-transparent rounded-md shadow-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Add Achievement
        </button>
      </div>
    </div>
  );

  const renderForm = () => {
    switch (activeSection) {
      case 'personalDetails': return renderPersonalDetailsForm();
      case 'education': return renderEducationForm();
      case 'professionalSummary': return renderSummaryForm();
      case 'experience': return renderExperienceForm();
      case 'projects': return renderProjectsForm();
      case 'certifications': return renderCertificationsForm();
      case 'skills': return renderSkillsForm();
      case 'achievements': return renderAchievementsForm();
      default: return null;
    }
  };

  return (
    <div className="relative">
      <header className="fixed top-0 left-0 right-0 z-10 bg-white border-b border-gray-200 shadow-sm pl-64 pr-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 relative">
            <button onClick={toggleDropdown} className="text-gray-600 hover:text-gray-900 transition-colors">
              <IoChevronBack size={18} className={`transition-transform duration-200 ${showDropdown ? '-rotate-90' : ''}`} />
            </button>
            <span className="text-lg font-semibold text-gray-800">{selectedResume}</span>
            {showDropdown && (
              <div className="absolute top-8 left-0 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-20">
                <ul className="max-h-48 overflow-y-auto text-sm text-gray-700">
                  {savedResumes.map((resume, index) => (
                    <li
                      key={index}
                      onClick={() => handleResumeSelect(resume)}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {resume}
                    </li>
                  ))}
                  <li className="px-4 py-2 text-blue-600 hover:bg-gray-100 cursor-pointer font-medium">See more...</li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="mt-3 flex items-center gap-2">
          <div className="flex flex-wrap gap-2 flex-grow">
            {sectionButtons.map(({ icon, label, section }, index) => (
              <button
                key={label}
                onClick={() => handleSectionClick(section, index)}
                className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
              >
                {icon} {label}
              </button>
            ))}
          </div>
        </div>
      </header>
      {activeSection && (
        <div className="absolute top-20 left-64 right-4 z-20 flex justify-center">
          <div className="bg-white bg-opacity-95 rounded-lg shadow-xl p-6 max-w-2xl w-full max-h-[70vh] overflow-y-auto border border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">
                {sections[currentStep].replace(/([A-Z])/g, ' $1').trim()}
              </h2>
              <button onClick={closeModal} className="text-gray-600 hover:text-gray-900">
                <X className="h-6 w-6" />
              </button>
            </div>
            {renderForm()}
            <div className="mt-6 flex justify-between">
              <button
                onClick={prevStep}
                disabled={currentStep === 0}
                className={`px-4 py-2 rounded-md text-sm font-medium ${currentStep === 0 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
              >
                Previous
              </button>
              <button
                onClick={saveProgress}
                className="px-4 py-2 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 flex items-center"
              >
                <Save className="mr-1 h-4 w-4" /> Save
              </button>
              <button
                onClick={nextStep}
                className="px-4 py-2 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
              >
                {currentStep === sections.length - 1 ? 'Finish' : 'Next'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;