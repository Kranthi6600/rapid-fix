import BlogAreaTwo from "@/components/BlogAreaTwo";
import CTAAreaTwo from "@/components/CTAAreaTwo";
import ClientAreaTwo from "@/components/ClientAreaTwo";
import FaqAreaTwo from "@/components/FaqAreaTwo";
import FooterAreaFour from "@/components/FooterAreaFour";
import HeaderFive from "@/components/HeaderFive";
import HeroSix from "@/components/HeroSix";
import ProductAreaOne from "@/components/ProductAreaOne";
import SubscribeTwo from "@/components/SubscribeTwo";
import Preloader from "@/helper/Preloader";
import ServiceAreaTwo from "@/components/ServiceAreaTwo";

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

      {/* Hero Six */}
      <HeroSix />

      {/* Service Area Two */}
      <ServiceAreaTwo />

      {/* Product Area One */}
      <ProductAreaOne />

      {/* CTA Area Two */}
      <CTAAreaTwo />

     {/* Client Area Two */}
      <ClientAreaTwo />

      {/* Blog Area Two */}
      <div className="space-top">
        <BlogAreaTwo />
      </div>

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
