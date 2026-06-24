import Breadcrumb from "@/components/Breadcrumb";
import FaqArea from "@/components/FaqArea";
import FooterArea from "@/components/FooterArea";
import Header from "@/components/Header";
import SubscribeTwo from "@/components/SubscribeTwo";
import Preloader from "@/helper/Preloader";

export const metadata = {
  title: "FAQ | RapidFix - Auto & Diesel Repair Specialists",
  description:
    "Find answers to frequently asked questions about auto repair, diesel repair, maintenance schedules, warranties, and more at RapidFix.",
};

const page = () => {
  return (
    <>
      <Preloader />
      <Header />
      <Breadcrumb
        title="Frequently Asked Questions"
        img="/assets/img/about/about-us.jpeg"
      />
      <FaqArea />
      <SubscribeTwo />
      <FooterArea />
    </>
  );
};

export default page;
