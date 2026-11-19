import Image from "next/image";

const clients = [
  { name: "NTPC", logo: "/assets/images/clients/1.webp" },
  { name: "NGSL", logo: "/assets/images/clients/2.webp" },
  { name: "IndianOil", logo: "/assets/images/clients/3.webp" },
  { name: "Petronet LNG", logo: "/assets/images/clients/4.webp" },
  { name: "Reliance Infrastructure", logo: "/assets/images/clients/5.webp" },
  { name: "Thermax", logo: "/assets/images/clients/6.webp" },
  // { name: "ISGEC", logo: "/assets/images/clients/7.webp" },
  { name: "Powerica", logo: "/assets/images/clients/8.webp" },
  { name: "Engage", logo: "/assets/images/clients/9.webp" },
  { name: "Kirloskar", logo: "/assets/images/clients/10.webp" },
  { name: "Client 11", logo: "/assets/images/clients/11.webp" },
  { name: "Client 12", logo: "/assets/images/clients/12.webp" },
  { name: "Client 13", logo: "/assets/images/clients/13.webp" },
  { name: "Client 14", logo: "/assets/images/clients/14.webp" },
  { name: "Client 15", logo: "/assets/images/clients/15.webp" },
  { name: "Client 16", logo: "/assets/images/clients/16.webp" },
  { name: "Client 17", logo: "/assets/images/clients/17.webp" },
  { name: "Client 18", logo: "/assets/images/clients/18.webp" },
  { name: "Client 19", logo: "/assets/images/clients/19.webp" },
  // { name: "Client 20", logo: "/assets/images/clients/20.webp" },
  { name: "Client 21", logo: "/assets/images/clients/21.webp" },
  { name: "Client 22", logo: "/assets/images/clients/22.webp" },
  { name: "Client 23", logo: "/assets/images/clients/23.webp" },
  { name: "Client 24", logo: "/assets/images/clients/24.webp" },
  { name: "Client 25", logo: "/assets/images/clients/25.webp" },
  { name: "Client 26", logo: "/assets/images/clients/26.webp" },
  { name: "Client 27", logo: "/assets/images/clients/27.webp" },
  { name: "Client 28", logo: "/assets/images/clients/28.webp" },
  { name: "Client 29", logo: "/assets/images/clients/29.webp" },
  { name: "Client 30", logo: "/assets/images/clients/30.webp" },
  { name: "Client 31", logo: "/assets/images/clients/31.webp" },
  { name: "Client 32", logo: "/assets/images/clients/32.webp" },
  { name: "Client 33", logo: "/assets/images/clients/33.webp" },
  { name: "Client 34", logo: "/assets/images/clients/34.webp" },
  { name: "Client 35", logo: "/assets/images/clients/35.webp" },
  { name: "Client 36", logo: "/assets/images/clients/36.webp" },
  { name: "Client 37", logo: "/assets/images/clients/37.webp" },
  { name: "Client 38", logo: "/assets/images/clients/38.webp" },
  { name: "Client 39", logo: "/assets/images/clients/39.webp" },
  { name: "Client 40", logo: "/assets/images/clients/40.webp" },
  { name: "Client 41", logo: "/assets/images/clients/41.webp" },
  { name: "Client 42", logo: "/assets/images/clients/42.webp" },
  { name: "Client 43", logo: "/assets/images/clients/43.webp" },
  { name: "Client 44", logo: "/assets/images/clients/44.webp" },
  { name: "Client 45", logo: "/assets/images/clients/45.webp" },
  { name: "Client 46", logo: "/assets/images/clients/46.webp" },
  { name: "Client 47", logo: "/assets/images/clients/47.webp" },
  { name: "Client 48", logo: "/assets/images/clients/48.webp" },
  { name: "Client 49", logo: "/assets/images/clients/49.webp" },
  { name: "Client 50", logo: "/assets/images/clients/50.webp" },
  { name: "Client 51", logo: "/assets/images/clients/51.webp" },
  { name: "Client 52", logo: "/assets/images/clients/52.webp" },
  { name: "Client 53", logo: "/assets/images/clients/53.webp" },
  { name: "Client 54", logo: "/assets/images/clients/54.webp" },
  { name: "Client 55", logo: "/assets/images/clients/55.webp" },
  { name: "Client 56", logo: "/assets/images/clients/56.webp" },
  { name: "Client 57", logo: "/assets/images/clients/57.webp" },
  { name: "Client 58", logo: "/assets/images/clients/58.webp" },
  { name: "Client 59", logo: "/assets/images/clients/59.webp" },
  { name: "Client 60", logo: "/assets/images/clients/60.webp" },
  { name: "Client 61", logo: "/assets/images/clients/61.webp" },
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
            Trusted by <span className="highlight">800+ customers</span> worldwide
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
                   fetchPriority="high"
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
                   fetchPriority="high"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}