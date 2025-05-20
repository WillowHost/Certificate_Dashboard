
import React from "react";
import { certificates } from "@/data/certificates";
import CertificateCard from "./CertificateCard";
import { useIsMobile } from "@/hooks/use-mobile";

const CertificateGrid: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className={`grid grid-cols-2 ${isMobile ? 'gap-3 px-2' : 'sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'} mb-8`}>
      {certificates.map((certificate) => (
        <div key={certificate.id} className="mb-6 sm:mb-4">
          <CertificateCard certificate={certificate} />
        </div>
      ))}
    </div>
  );
};

export default CertificateGrid;
