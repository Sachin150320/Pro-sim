import Image from "next/image";
import Link from "next/link";
import ScrollAnimation from "@/app/Components/ScrollAnimation"; // Adjust path to your component file

const features = [
  {
    title: "Advanced Physics-Based Simulation",
    description: "High-precision FEA, CFD, seismic, and multi-body dynamics predicting extreme real-world operating physics.",
  },
  {
    title: "Global Regulatory Compliance",
    description: "Deep compliance mastery with ASME, RCC-M, API 579, BS 7910, IEEE, EN, and AERB nuclear/industrial standards.",
  },
  {
    title: "Execution-Phase Delivery Excellence",
    description: "Detailed design and sizing calculations through 3D CAD modelling, fabrication deliverables, and asset life extension.",
  },
  {
    title: "Trusted by Global EPCs & OEMs",
    description: "Over 25 years acting as an agile engineering arm for world-class energy and infrastructure conglomerates.",
  },
];

export default function EngineeringSection() {
  return (
    <section className="engineering-section">
      <div className="engineering-container">
        
       
        <div className="engineering-main-layout">
          
          {/* Left Side Image Animation */}
          <ScrollAnimation>
            <div className="engineering-image-wrapper">
              <div className="engineering-main-image">
                <Image
                  src="/assets/images/about/1.webp" 
                  alt="Industrial Plant Engineering"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
             
            </div>
          </ScrollAnimation>

          {/* Right Side Content */}
          <div className="engineering-right-content">
            
            {/* Description Text Box Animation */}
            <ScrollAnimation delay={150}>
               {/* Section Header Animation */}
        <ScrollAnimation>
          <div className="engineering-header">
 <span className="industries-subtitle">
                 About Us
                </span>



            <h2 className="engineering-title">Engineering Your Designs</h2>
            <div className="title-underline" />
           
          </div>
        </ScrollAnimation>

        {/* Main Layout */}
              <div className="large-feature-card">
                <div className="large-card-text">
                  <p>
                    ProSIM is a multidisciplinary engineering and design company delivering reliable solutions across the Energy, Process, Utilities, and Infrastructure sectors. We work with EPC&apos;s, OEM&apos;s and engineering service companies to support projects from engineering design through detailed engineering and analysis.
                  </p>
                 
                </div>
                
                <div className="large-card-footer">
                  <div className="card-badge-left">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                    <span>Global Engineering Standards Compliant</span>
                  </div>
                  
                  <Link href="/industries" className="card-action-link">
                    Partner with Us <span className="arrow">→</span>
                  </Link>
                </div>
              </div>
            </ScrollAnimation>

            {/* Feature Cards 2x2 Grid with Staggered Delays */}
            <div className="features-grid">
              {features.map((item, index) => (
                <ScrollAnimation key={index} delay={200 + index * 100}>
                  <div className="feature-card">
                    <div className="feature-card-icon">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <div className="feature-card-content">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}