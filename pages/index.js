import Head from "next/head";
import AboutUs from "../components/AboutUs";
import Clientsbrand from "../components/Clientsbrand";
import ClientsTestomonials from "../components/ClientsTestomonials";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Industries from "../components/Industries";
import NavbarComponent from "../components/navbar";
import Notification from "../components/Notification";
import Services from "../components/Services";

export default function Home() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto font-inter">
        <NavbarComponent />
        <HeroSection />
        <ClientsTestomonials />
        <Services />
        <Clientsbrand />
        <Industries />
        <AboutUs />
        <ContactUs />

        <Footer />
      </div>
    </>
  );
}
