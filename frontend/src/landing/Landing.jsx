import React from "react";
import Navbar from "./pages/Navbar";
import Resume from "./pages/Resume";
import CompaniesList from "./pages/CompaniesList";
import { Routes, Route } from "react-router-dom";
import WhyUs from "./pages/WhyUs";
import StepsForResume from "./pages/StepsForResume";
import ResumeTemplate from "./pages/ResumeTemplate";
import Features from "./pages/Features";
import Subscription from "./pages/Subscription";
import WhyJobGenie from "./pages/WhyJobGenie";
import Testimonials from "./pages/Testimonials";
import Footer from "./pages/Footer";

const Landing = () => {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <Resume />
      <CompaniesList />
      <WhyUs />
      <StepsForResume />
      <ResumeTemplate />
      <Features />
      <Subscription />
      <WhyJobGenie />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Landing;
