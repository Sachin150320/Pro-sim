import Image from "next/image";

const clients = [
  { name: "NTPC", logo: "/assets/images/clients/1.png" },
  { name: "NGSL", logo: "/assets/images/clients/2.png" },
  { name: "IndianOil", logo: "/assets/images/clients/3.png" },
  { name: "Petronet LNG", logo: "/assets/images/clients/4.png" },
  { name: "Reliance Infrastructure", logo: "/assets/images/clients/5.png" },
  { name: "Thermax", logo: "/assets/images/clients/6.png" },
  { name: "ISGEC", logo: "/assets/images/clients/7.png" },
  { name: "Powerica", logo: "/assets/images/clients/8.png" },
  { name: "Engage", logo: "/assets/images/clients/9.png" },
  { name: "Kirloskar", logo: "/assets/images/clients/10.png" },
 
];

export default function Clients() {
  return (
    <section className="clients-section">
      <div className="clients-container">
        {/* Section Heading & Description */}
        <div className="clients-header">
          
           <span className="industries-subtitle">
                  Clients
                </span>

          
          <h2>
            Trusted by <span className="highlight">1000+ customers</span> worldwide
          </h2>
          <div className="title-underline" />
          <p className="clients-description">
            Nuclear operators, oil & gas majors, thermal utilities, EPCs and equipment OEMs come to ProSIM for detailed engineering and analysis they can hand straight to fabrication.
          </p>
        </div>
      </div>

      {/* Automatic Infinite Scrolling Track */}
      <div className="clients-marquee">
        <div className="clients-track">
          {/* First set of logos */}
          {clients.map((client, index) => (
            <div className="client-card" key={`client-1-${index}`}>
              <div className="client-logo-inner">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={130}
                  height={50}
                  style={{ objectFit: "contain", width: "100%", height: "100%" }}
                />
              </div>
            </div>
          ))}
          {/* Duplicate set of logos to create seamless infinite loop */}
          {clients.map((client, index) => (
            <div className="client-card" key={`client-2-${index}`}>
              <div className="client-logo-inner">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={130}
                  height={50}
                  style={{ objectFit: "contain", width: "100%", height: "100%" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}