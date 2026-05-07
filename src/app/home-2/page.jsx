import AboutTwo from "@/components/AboutTwo";
import AppointmentAreaTwo from "@/components/AppointmentAreaTwo";
import BlogAreaTwo from "@/components/BlogAreaTwo";
import CTAAreaTwo from "@/components/CTAAreaTwo";
import ClientAreaTwo from "@/components/ClientAreaTwo";
import CounterTwo from "@/components/CounterTwo";
import FaqAreaTwo from "@/components/FaqAreaTwo";
import FooterAreaTwo from "@/components/FooterAreaTwo";
import HeaderFive from "@/components/HeaderFive";
import HeroTwo from "@/components/HeroTwo";
import PortfolioTwo from "@/components/PortfolioTwo";
import PricingPlanTwo from "@/components/PricingPlanTwo";
import ProcessAreaTwo from "@/components/ProcessAreaTwo";
import ServiceAreaTwo from "@/components/ServiceAreaTwo";
import TeamAreaTwo from "@/components/TeamAreaTwo";
import WhyChooseUsOne from "@/components/WhyChooseUsOne";
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

      {/* Header Two */}
      <HeaderFive />

      {/* Hero Two */}
      <HeroTwo />

      {/* Service Area Two */}
      <ServiceAreaTwo />

      {/* About Two */}
      <div className="about-area-2 bg-smoke">
        <AboutTwo />
      </div>

      {/* Counter Two */}
      <CounterTwo />

      {/* Portfolio Two */}
      <PortfolioTwo />

      {/* Why Choose Us One */}
      <WhyChooseUsOne />

      {/* Process Area Two */}
      <ProcessAreaTwo />

      {/* CTA Area Two */}
      <CTAAreaTwo />

      {/* Pricing Plan Two */}
      <PricingPlanTwo />

      {/* Appointment Area Two */}
      <AppointmentAreaTwo />

      {/* Team Area Two */}
      <TeamAreaTwo />

      {/* Client Area Two */}
      <ClientAreaTwo />

      {/* Faq Area Two */}
      <FaqAreaTwo />

      {/* Blog Area Two */}
      <BlogAreaTwo />

      {/* Footer Area Two */}
      <FooterAreaTwo />
    </>
  );
};

export default page;
