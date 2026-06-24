import BlogAreaList from "@/components/BlogAreaList";
import Breadcrumb from "@/components/Breadcrumb";
import FooterArea from "@/components/FooterArea";
import Header from "@/components/Header";
import Subscribe from "@/components/Subscribe";
import Preloader from "@/helper/Preloader";

export const metadata = {
  title: "Blog | RapidFix - Auto & Diesel Repair Tips",
  description:
    "Read the RapidFix blog for expert auto and diesel repair tips, maintenance advice, fleet management insights, and everything you need to keep your vehicle running at its best.",
};


const page = () => {
  return (
    <>
      {/* Preloader */}
 <Preloader />

      {/* Header */}
      <Header />

      {/* Breadcrumb */}
      <Breadcrumb title="Blog" img="/assets/img/blog/blog-1.jpg" className="right-bottom" />

      {/* Blog Area List */}
      <BlogAreaList />

      {/* Subscribe */}
      <Subscribe />

      {/* Footer Area */}
      <FooterArea />
    </>
  );
};

export default page;

