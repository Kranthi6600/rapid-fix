import BlogArea from "@/components/BlogArea";
import ClientArea from "@/components/ClientArea";
import FaqArea from "@/components/FaqArea";
import FooterArea from "@/components/FooterArea";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutHome from "../components/AboutHome.jsx";
import ProductArea from "@/components/ProductArea";
import Preloader from "@/helper/Preloader";
import ServiceArea from "@/components/ServiceArea";
import MarqueeComponent from "@/components/Marquee";
import Subscribe from "@/components/Subscribe.jsx";
import CTAArea from "@/components/CTAArea.jsx";
import Counter from "@/components/Counter.jsx";

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

      {/* Header */}
      <Header />

      {/* Hero */}
      <Hero />

      {/* Counter */}
      <div style={{ marginTop: '150px' }}>
        <Counter />
      </div>


      {/* About Home */}
      <AboutHome />

      {/* Marquee */}
      <MarqueeComponent />

      {/* Service Area */}
      <ServiceArea />

      {/* CTA Area */}
      <div style={{ marginTop: '100px' }}>
        <CTAArea />
      </div>

      {/* Product Area */}
      <ProductArea />

      {/* Blog Area */}
      <BlogArea />

      {/* Client Area */}
      <ClientArea />

      {/* Faq Area */}
      <FaqArea />

      {/* Subscribe */}
      <Subscribe />

      {/* Footer Area */}
      <FooterArea />
    </>
  );
};

export default page;

