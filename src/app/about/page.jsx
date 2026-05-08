import AboutTwo from "@/components/AboutTwo";
import Breadcrumb from "@/components/Breadcrumb";
import CTAAreaOne from "@/components/CTAAreaOne";
import FooterAreaFour from "@/components/FooterAreaFour";
import HeaderFive from "@/components/HeaderFive";
import ProcessAreaOne from "@/components/ProcessAreaOne";
import SubscribeOne from "@/components/SubscribeOne";
import TestimonialOne from "@/components/TestimonialOne";
import Preloader from "@/helper/Preloader";

export const metadata = {
  title: "About Us | Rapid Fix - Auto & Diesel Repair Specialists",
  description:
    "Learn about Rapid Fix — certified auto and diesel repair technicians with 15+ years of experience and 5,000+ vehicles serviced. We deliver fast, accurate, and affordable service for personal vehicles and commercial fleets.",
};


const page = () => {
  return (
    <>
      {/* Preloader */}
  <Preloader />

      {/* Header one */}
      <HeaderFive />

      {/* Breadcrumb */}
      <Breadcrumb title={"About Us"} img="/assets/img/about/about-us.jpg"/>

      {/* About Area */}
      <AboutTwo />

      {/* Process Area One */}
      <ProcessAreaOne />

      {/* CTA Area One */}
      <CTAAreaOne />

      {/* Testimonial One */}
      <TestimonialOne />

      {/* Subscribe One */}
      <SubscribeOne />

      {/* Footer Area Four */}
      <FooterAreaFour />
    </>
  );
};

export default page;
