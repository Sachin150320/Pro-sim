import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Clients from "./Components/Clients";
import About from "./Components/About";
import Footer from "./Components/Footer/Footer";
import WhyChooseUs from "./Components/WhyChooseUs";
import Offerings from "./Components/Offerings";
import ContactSection from "./Components/ContactSection";
import EngineeringSection from "./Components/EngineeringSection";
import IndustriesSection from "./Components/IndustriesSection";
import EventsSection from "./Components/EventsSection";
import LatestEvents from "./Components/LatestEvents";
import "@/app/globals.css";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07101d]">
      <Hero />

      <About />
      <EngineeringSection />
      <IndustriesSection />

      {/* <WhyChooseUs /> */}
      {/* <Offerings /> */}
      <Clients />

      <EventsSection />
      <LatestEvents />
      <ContactSection />
    </main>
  );
}