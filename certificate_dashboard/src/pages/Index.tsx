
import React from "react";
import Header from "@/components/Header";
import CertificateGrid from "@/components/CertificateGrid";
import NavBar from "@/components/NavBar";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-sky-50/30 relative">
      <NavBar 
        githubUrl="https://github.com/ashirbad-scripts" 
        linkedinUrl="https://www.linkedin.com/in/ashirbad-routray-7a872732a/" 
        portfolioUrl="https://willowhost.github.io/Personal_Website/" 
      />
      
      <Header name="Ashirbad Routray" title="Data Analyst" />
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-center mb-4 text-sky-900">Certificates Dashboard</h2>
        <div className="flex justify-center">
          <div className="w-48 h-0.5 bg-gradient-to-r from-transparent via-sky-600 to-transparent"></div>
        </div>
          <div className="mt-7 text-center text-sm text-sky-700">
        <p>Click on any certificate to view the full PDF</p>
      </div>
      </div>
      
      
      <CertificateGrid />
      
    </div>
  );
};

export default Index;
