import BlogAreaTwo from "@/components/BlogAreaTwo";
import CTAAreaTwo from "@/components/CTAAreaTwo";
import ClientAreaFour from "@/components/ClientAreaFour";
import FaqAreaThree from "@/components/FaqAreaThree";
import FooterAreaFour from "@/components/FooterAreaFour";
import HeaderFive from "@/components/HeaderFive";
import HeroSix from "@/components/HeroSix";
import ProductAreaOne from "@/components/ProductAreaOne";
import SubscribeTwo from "@/components/SubscribeTwo";
import Preloader from "@/helper/Preloader";

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

      {/* Product Area One */}
      <ProductAreaOne />

      {/* CTA Area Two */}
      <CTAAreaTwo />


      {/* Client Area Four */}
      <ClientAreaFour />

      {/* Blog Area Two */}
      <div className="space-top">
        <BlogAreaTwo />
      </div>

      {/* Faq Area three */}
      <FaqAreaThree />

      {/* Subscribe Two */}
      <SubscribeTwo />

      {/* Footer Area Four */}
      <FooterAreaFour />
    </>
  );
};

export default page;
