import Breadcrumb from "@/components/Breadcrumb";
import FooterArea from "@/components/FooterArea";
import Header from "@/components/Header";
import ServiceAreaTwo_multi_img from "@/components/ServiceAreaTwo_multi_img";
import Subscribe from "@/components/Subscribe";
import Preloader from "@/helper/Preloader";

export const metadata = {
  title: "Services | Rapid Fix - Auto & Diesel Repair Specialists",
  description:
    "Explore Rapid Fix services: auto repair, diesel repair, diagnostics, maintenance, fleet services, and Safety Standards Certificate (SSC) inspections.",
};


const page = () => {
  return (
    <>
      {/* Preloader */}
 <Preloader />

      {/* Header */}
      <Header />

      {/* Breadcrumb */}
      <Breadcrumb title={"Service"} img={"/assets/img/service/service-1.jpg"} />

      {/* Service Area Two */}
      <ServiceAreaTwo_multi_img />

      {/* Subscribe */}
      <Subscribe />

{/* Footer Area */}
<FooterArea />
    </>
  );
};

export default page;

