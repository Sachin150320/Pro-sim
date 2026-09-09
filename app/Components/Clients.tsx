import Image from "next/image";

const clients = [
  { name: "NTPC", logo: "/assets/images/clients/1.png" },
  { name: "NGSL", logo: "/assets/images/clients/2.png" },
  { name: "IndianOil", logo: "/assets/images/clients/3.png" },
  { name: "Petronet LNG", logo: "/assets/images/clients/4.png" },
  { name: "Reliance Infrastructure", logo: "/assets/images/clients/5.png" },
  { name: "Thermax", logo: "/assets/images/clients/6.png" },
  // { name: "ISGEC", logo: "/assets/images/clients/7.png" },
  { name: "Powerica", logo: "/assets/images/clients/8.png" },
  { name: "Engage", logo: "/assets/images/clients/9.png" },
  { name: "Kirloskar", logo: "/assets/images/clients/10.png" },
  { name: "Client 11", logo: "/assets/images/clients/11.png" },
  { name: "Client 12", logo: "/assets/images/clients/12.png" },
  { name: "Client 13", logo: "/assets/images/clients/13.png" },
  { name: "Client 14", logo: "/assets/images/clients/14.png" },
  { name: "Client 15", logo: "/assets/images/clients/15.png" },
  { name: "Client 16", logo: "/assets/images/clients/16.png" },
  { name: "Client 17", logo: "/assets/images/clients/17.png" },
  { name: "Client 18", logo: "/assets/images/clients/18.png" },
  { name: "Client 19", logo: "/assets/images/clients/19.png" },
  { name: "Client 20", logo: "/assets/images/clients/20.png" },
  { name: "Client 21", logo: "/assets/images/clients/21.png" },
  { name: "Client 22", logo: "/assets/images/clients/22.png" },
  { name: "Client 23", logo: "/assets/images/clients/23.png" },
  { name: "Client 24", logo: "/assets/images/clients/24.png" },
  { name: "Client 25", logo: "/assets/images/clients/25.png" },
  { name: "Client 26", logo: "/assets/images/clients/26.png" },
  { name: "Client 27", logo: "/assets/images/clients/27.png" },
  { name: "Client 28", logo: "/assets/images/clients/28.png" },
  { name: "Client 29", logo: "/assets/images/clients/29.png" },
  { name: "Client 30", logo: "/assets/images/clients/30.png" },
  { name: "Client 31", logo: "/assets/images/clients/31.png" },
  { name: "Client 32", logo: "/assets/images/clients/32.png" },
  { name: "Client 33", logo: "/assets/images/clients/33.png" },
  { name: "Client 34", logo: "/assets/images/clients/34.png" },
  { name: "Client 35", logo: "/assets/images/clients/35.png" },
  { name: "Client 36", logo: "/assets/images/clients/36.png" },
  { name: "Client 37", logo: "/assets/images/clients/37.png" },
  { name: "Client 38", logo: "/assets/images/clients/38.png" },
  { name: "Client 39", logo: "/assets/images/clients/39.png" },
  { name: "Client 40", logo: "/assets/images/clients/40.png" },
  { name: "Client 41", logo: "/assets/images/clients/41.png" },
  { name: "Client 42", logo: "/assets/images/clients/42.png" },
  { name: "Client 43", logo: "/assets/images/clients/43.png" },
  { name: "Client 44", logo: "/assets/images/clients/44.png" },
  { name: "Client 45", logo: "/assets/images/clients/45.png" },
  { name: "Client 46", logo: "/assets/images/clients/46.png" },
  { name: "Client 47", logo: "/assets/images/clients/47.png" },
  { name: "Client 48", logo: "/assets/images/clients/48.png" },
  { name: "Client 49", logo: "/assets/images/clients/49.png" },
  { name: "Client 50", logo: "/assets/images/clients/50.png" },
  { name: "Client 51", logo: "/assets/images/clients/51.png" },
  { name: "Client 52", logo: "/assets/images/clients/52.png" },
  { name: "Client 53", logo: "/assets/images/clients/53.png" },
  { name: "Client 54", logo: "/assets/images/clients/54.png" },
  { name: "Client 55", logo: "/assets/images/clients/55.png" },
  { name: "Client 56", logo: "/assets/images/clients/56.png" },
  { name: "Client 57", logo: "/assets/images/clients/57.png" },
  { name: "Client 58", logo: "/assets/images/clients/58.png" },
  { name: "Client 59", logo: "/assets/images/clients/59.png" },
  { name: "Client 60", logo: "/assets/images/clients/60.png" },
  { name: "Client 61", logo: "/assets/images/clients/61.png" },
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