import Breadcrumb from "@/components/Breadcrumb";
import FooterArea from "@/components/FooterArea";
import Header from "@/components/Header";
import ServiceAreaTwo_multi_img from "@/components/ServiceAreaTwo_multi_img";
import Subscribe from "@/components/Subscribe";
import Preloader from "@/helper/Preloader";
import JsonLd from "@/components/JsonLd";
import { fetchServicesList } from "@/lib/servicesApi";

export const metadata = {
  title: "Services | RapidFix - Auto & Diesel Repair Specialists",
  description:
    "Explore RapidFix services: auto repair, diesel repair, diagnostics, maintenance, fleet services, and Safety Standards Certificate (SSC) inspections.",
};


const page = async () => {
  const listData = await fetchServicesList();

  return (
    <>
      {/* Schema.org JSON-LD */}
      <JsonLd
        data={[listData?.schema?.item_list, listData?.schema?.collection_page]}
      />

      {/* Preloader */}
 <Preloader />

      {/* Header */}
      <Header />

      {/* Breadcrumb */}
      <Breadcrumb title={"Service"} img={"/assets/img/services/service-1.jpg"} />

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

