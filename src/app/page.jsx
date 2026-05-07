import BlogAreaTwo from "@/components/BlogAreaTwo";
import CTAAreaTwo from "@/components/CTAAreaTwo";
import CategoryAreaOne from "@/components/CategoryAreaOne";
import ClientAreaFour from "@/components/ClientAreaFour";
import FaqAreaThree from "@/components/FaqAreaThree";
import FooterAreaFour from "@/components/FooterAreaFour";
import HeaderFive from "@/components/HeaderFive";
import HeroSix from "@/components/HeroSix";
import ProductAreaOne from "@/components/ProductAreaOne";
import ProductAreaTwo from "@/components/ProductAreaTwo";
import SubscribeTwo from "@/components/SubscribeTwo";
import Preloader from "@/helper/Preloader";

export const metadata = {
  title: "Home || Rapid Fix - Car Repair & Auto Services NEXT Js Template",
  description:
    "Rapid Fix is a clean and modern React Template suitable for any type of Auto Servicing, Car Repair & Maintenance website. It is created for automobile servicing providers who offer car wash, car service, routine maintenance, truck service, etc. This HTML template can be used for car servicing, car repairing, car wash, auto shop, mechanic shop, batteries shop, tire / wheel shop, and multipurpose businesses. We have used comment on codes and also decorated the codes beautifully so one can find it very easy to customize.",
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

      {/* Category Area One */}
      <CategoryAreaOne />

      {/* Product Area One */}
      <ProductAreaOne />

      {/* CTA Area Two */}
      <CTAAreaTwo />

      {/* Product Area Two */}
      <ProductAreaTwo />

      {/* Faq Area three */}
      <FaqAreaThree />

      {/* Client Area Four */}
      <ClientAreaFour />

      {/* Blog Area Two */}
      <div className="space-top">
        <BlogAreaTwo />
      </div>

      {/* Subscribe Two */}
      <SubscribeTwo />

      {/* Footer Area Four */}
      <FooterAreaFour />
    </>
  );
};

export default page;
