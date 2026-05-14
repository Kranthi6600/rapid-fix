import BlogAreaTwo from "@/components/BlogAreaTwo";
import ClientAreaTwo from "@/components/ClientAreaTwo";
import FaqAreaTwo from "@/components/FaqAreaTwo";
import FooterAreaFour from "@/components/FooterAreaFour";
import HeaderFive from "@/components/HeaderFive";
import HeroThree from "@/components/HeroThree";
import AboutThree from "../components/AboutThree.jsx";
import ProductAreaOne from "@/components/ProductAreaOne";
import Preloader from "@/helper/Preloader";
import ServiceAreaTwo from "@/components/ServiceAreaTwo";
import MarqueeOne from "@/components/MarqueeOne";
import SubscribeTwo from "@/components/SubscribeTwo.jsx";
import CTAAreaTwo from "@/components/CTAAreaTwo.jsx";
import CounterOne from "@/components/CounterOne.jsx";

export const metadata = {
  title: "Rapid Fix | Auto & Diesel Repair in Scarborough, ON",
  description:
    "Rapid Fix offers expert auto and diesel repair in Scarborough, ON. From brakes and diagnostics to fleet maintenance and SSC inspections — fast, honest, and affordable service at 112 Sinnott Rd.",
};

const page = () => {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* Header Five */}
      <HeaderFive />

      {/* Hero Three */}
      <HeroThree />

      {/* Counter One */}
      <div style={{ marginTop: '150px' }}>
        <CounterOne />
      </div>


      {/* About Three */}
      <AboutThree />

      {/* Marquee One */}
      <MarqueeOne />

      {/* Service Area Two */}
      <ServiceAreaTwo />

      {/* CTA Area Two */}
      <div style={{ marginTop: '100px' }}>
        <CTAAreaTwo />
      </div>

      {/* Product Area One */}
      <ProductAreaOne />

      {/* Blog Area Two */}
      <BlogAreaTwo />

      {/* Client Area Two */}
      <ClientAreaTwo />

      {/* Faq Area Two */}
      <FaqAreaTwo />

      {/* Subscribe Two */}
      <SubscribeTwo />

      {/* Footer Area Four */}
      <FooterAreaFour />
    </>
  );
};

export default page;
