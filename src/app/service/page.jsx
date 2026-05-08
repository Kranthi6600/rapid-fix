import Breadcrumb from "@/components/Breadcrumb";
import FooterAreaFour from "@/components/FooterAreaFour";
import HeaderFive from "@/components/HeaderFive";
import ServiceAreaOne_multi_img from "@/components/ServiceAreaOne_multi_img";
import SubscribeOne from "@/components/SubscribeOne";
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

      {/* Header one */}
      <HeaderFive />

      {/* Breadcrumb */}
      <Breadcrumb title={"Service"} img={"/assets/img/service/service-1.jpg"} />

      {/* Service Area One */}
      <ServiceAreaOne_multi_img />

      {/* Subscribe One */}
      <SubscribeOne />

{/* Footer Area Four */}
<FooterAreaFour />
    </>
  );
};

export default page;
