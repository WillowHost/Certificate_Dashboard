
import React from "react";
import { Card } from "@/components/ui/card";
import { Certificate } from "@/data/certificates";

interface CertificateCardProps {
  certificate: Certificate;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ certificate }) => {
  const handleClick = () => {
    // In a real implementation, this would open the PDF
    // For now, we'll just log it since we don't have real PDFs yet
    console.log(`Opening PDF for: ${certificate.title}`);
    window.open(certificate.pdfPath, "_blank");
  };

  return (
    <Card 
      className="overflow-hidden rounded-md border-2 border-gray hover:shadow-lg hover:shadow-sky-100 transition-all cursor-pointer flex flex-col h-full bg-white relative max-w-[98%] sm:max-w-full mx-auto"
      onClick={handleClick}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-sky-50/10 to-transparent opacity-30 rounded-md"></div>
      <div className="absolute -inset-0.5 bg-sky-100 rounded-md blur opacity-30 group-hover:opacity-50 transition duration-200"></div>
      <div className="relative z-10 aspect-[4/3] overflow-hidden bg-gray-100 flex items-center justify-center">
        <img
          src={certificate.thumbnailPath}
          alt={`${certificate.title} Certificate`}
          className="h-full w-full object-contain"
        />
        <div className="absolute top-2 right-2">
          <span className="bg-sky-900/50 text-white text-xs px-2 py-1 rounded-md backdrop-blur-sm">
            Preview
          </span>
        </div>
      </div>
      <div className="p-3 relative z-10">
        <h3 className="font-medium text-sm truncate text-sky-900" title={certificate.title}>
          {certificate.title}
        </h3>
        <div className="flex justify-between items-center mt-1">
          <span className="text-xs text-sky-700">{certificate.issuedBy}</span>
          <span className="text-xs text-sky-700">{certificate.dateObtained}</span>
        </div>
      </div>
    </Card>
  );
};

export default CertificateCard;
