import Breadcrumb from "@/components/Breadcrumb";
import ContactArea from "@/components/ContactArea";
import FooterArea from "@/components/FooterArea";
import Header from "@/components/Header";
import Subscribe from "@/components/Subscribe";
import Preloader from "@/helper/Preloader";

export const metadata = {
  title: "Contact Us | Rapid Fix - 112 Sinnott Rd, Scarborough",
  description:
    "Contact Rapid Fix at 112 Sinnott Rd, Scarborough, ON. Call (437) 836-4848. Open Monday to Friday, 8:00 AM � 6:00 PM. Book your auto or diesel repair service today.",
};


const page = () => {
  return (
    <>
      {/* Preloader */}
  <Preloader />

       {/* Header */}
       <Header />

{/* Breadcrumb */}
<Breadcrumb title={"Contact-Us"} img="/assets/img/contact/contact-us.jpg"/>

   {/* Contact Area */}
   <ContactArea />

{/* Subscribe */}
<Subscribe />

{/* Footer Area */}
<FooterArea />
    </>
  );
};

export default page;

