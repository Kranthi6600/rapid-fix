import BlogAreaList from "@/components/BlogAreaList";
import Breadcrumb from "@/components/Breadcrumb";
import FooterAreaFour from "@/components/FooterAreaFour";
import HeaderFive from "@/components/HeaderFive";
import SubscribeOne from "@/components/SubscribeOne";
import Preloader from "@/helper/Preloader";

export const metadata = {
  title: "Blog | Rapid Fix - Auto & Diesel Repair Tips",
  description:
    "Read the Rapid Fix blog for expert auto and diesel repair tips, maintenance advice, fleet management insights, and everything you need to keep your vehicle running at its best.",
};


const page = () => {
  return (
    <>
      {/* Preloader */}
 <Preloader />

      {/* Header one */}
      <HeaderFive />

      {/* Breadcrumb */}
      <Breadcrumb title={"Blog"} img="/assets/img/blog/blog-1.jpg"/>

      {/* Blog Area List */}
      <BlogAreaList />

      {/* Subscribe One */}
      <SubscribeOne />

      {/* Footer Area Four */}
      <FooterAreaFour />
    </>
  );
};

export default page;
