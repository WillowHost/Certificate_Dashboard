
export interface Certificate {
  id: string;
  title: string;
  issuedBy: string;
  dateObtained: string;
  thumbnailPath: string;
  pdfPath: string;
}

// Mock certificates data - you'll replace with your actual certificates later
export const certificates: Certificate[] = [
   {
    id: "1",
    title: "Aritificial Intelligence",
    issuedBy: "Udemy",
    dateObtained: "May 2025",
    thumbnailPath: "/thumbnails/ai.png",
    pdfPath: "/certificates/AI_Bootcamp.pdf",
  },
  {
    id: "2",
    title: "Deloitte Job Simulation",
    issuedBy: "Forage",
    dateObtained: "May 2025",
    thumbnailPath: "/thumbnails/deloitte.png",
    pdfPath: "/certificates/Deloitte_JobSimulation.pdf",
  }, 
  {
    id: "3",
    title: "AI ML Bootcamp",
    issuedBy: "Deep Surge",
    dateObtained: "Mar 2025",
    thumbnailPath: "/thumbnails/aiml_bootcamp.png",
    pdfPath: "/certificates/AI_ML BootCamp.pdf",
  },
  {
    id: "4",
    title: "Github",
    issuedBy: "Lets Upgrade",
    dateObtained: "Mar 2025",
    thumbnailPath: "/thumbnails/github.png",
    pdfPath: "/certificates/GitHub_Certificate.pdf",
  },
  {
    id: "5",
    title: "React",
    issuedBy: "Lets Upgrade",
    dateObtained: "Feb 2025",
    thumbnailPath: "/thumbnails/react.png",
    pdfPath: "/certificates/React_Certificate.pdf",
  },
  {
    id: "6",
    title: "Python",
    issuedBy: "Udemy",
    dateObtained: "Feb 2025",
    thumbnailPath: "/thumbnails/python.png",
    pdfPath: "/certificates/Python_Certificate.pdf",
  },
  {
    id: "7",
    title: "HTML & CSS",
    issuedBy: "Udemy",
    dateObtained: "Nov 2023",
    thumbnailPath: "/thumbnails/html.png", 
    pdfPath: "/certificates/HTML&CSS_Certificate.pdf",
  },
  {
    id: "6",
    title: "Advance SQL",
    issuedBy: "HackerRank",
    dateObtained: "Aug 2025",
    thumbnailPath: "/thumbnails/sql.png",
    pdfPath: "/certificates/sql_advanced certificate.pdf",
  },
  // {
  //   id: "7",
  //   title: "DevOps Essentials",
  //   issuedBy: "AWS Training",
  //   dateObtained: "Jan 2024",
  //   thumbnailPath: "/placeholder.svg",
  //   pdfPath: "#",
  // },
  // {
  //   id: "8",
  //   title: "Cloud Computing",
  //   issuedBy: "Google Cloud",
  //   dateObtained: "Mar 2024",
  //   thumbnailPath: "/placeholder.svg",
  //   pdfPath: "#",
  // },
];
