import { ScrollTimeline } from "../lightswind/scroll-timeline";
import { Award, Layers, Globe } from "lucide-react";

export const CareerTimeline = () => {
  const careerEvents = [
    {
    year: "Sep 2025 – Present",
    title: "Odoo Developer",
    subtitle: "Navabrind IT Solutions, Chennai",
    description:
      "Developed and customized Odoo Website module to build consultancy platform (tjdigitalsystems.com) with responsive UI. Worked extensively on Contacts and Sales modules, configuring workflows and streamlining lead-to-order processes. Delivered scalable ERP solutions aligned with business requirements.",
      icon: <Globe className="h-4 w-4 mr-2 text-primary" />,
    },
    {
    year: "Apr 2025 – Aug 2025", 
    title: "Full-Stack Developer Intern",
    subtitle: "Vidyardi Pvt Ltd, Hyderabad",
    description:
      "Built WinGig platform with ReactJS frontend (25% engagement increase) and Flask/Python backend APIs. Designed AI-driven job-seeker module with resume builder and assessments for 100+ users. Optimized SQL database schema, reducing query response time by 20%.",
      icon: <Layers className="h-4 w-4 mr-2 text-primary" />,
    },
    
    {
      year: "Mar 2024 – Jun 2024",
    title: "PowerApps Intern", 
    subtitle: "Architot Solutions, Bangalore",
    description:
      "Developed OCR-based Aadhaar data extraction system with custom ML model for automated identity capture. Designed PowerApps solutions and integrated Power Automate flows, significantly reducing manual document processing effort across teams.",
      icon: <Award className="h-4 w-4 mr-2 text-primary" />,
    },
    
  ];

  return (
    <div id="career">
      <ScrollTimeline
        events={careerEvents}
        title="Career Journey"
        subtitle="An evolving path of leadership, innovation, and impact"
        animationOrder="staggered"
        cardAlignment="alternating"
        cardVariant="elevated"
        parallaxIntensity={0.15}
        revealAnimation="fade"
        progressIndicator={true}
        lineColor="bg-primary/20"
        activeColor="bg-primary"
        progressLineWidth={3}
        progressLineCap="round"
      />
    </div>
  );
};
