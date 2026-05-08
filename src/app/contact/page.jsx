import Breadcrumb from "@/components/Breadcrumb";
import ContactArea from "@/components/ContactArea";
import FooterAreaFour from "@/components/FooterAreaFour";
import HeaderFive from "@/components/HeaderFive";
import SubscribeOne from "@/components/SubscribeOne";
import Preloader from "@/helper/Preloader";

export const metadata = {
  title: "Contact Us | Rapid Fix - 112 Sinnott Rd, Scarborough",
  description:
    "Contact Rapid Fix at 112 Sinnott Rd, Scarborough, ON. Call (437) 836-4848. Open Monday to Friday, 8:00 AM – 6:00 PM. Book your auto or diesel repair service today.",
};


const page = () => {
  return (
    <>
      {/* Preloader */}
  <Preloader />

       {/* Header one */}
       <HeaderFive />

{/* Breadcrumb */}
<Breadcrumb title={"Contact-Us"} img="/assets/img/contact/contact-us.jpg"/>

   {/* Contact Area */}
   <ContactArea />

{/* Subscribe One */}
<SubscribeOne />

{/* Footer Area Four */}
<FooterAreaFour />
    </>
  );
};

export default page;
