import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FooterArea from "@/components/FooterArea";
import Header from "@/components/Header";
import Preloader from "@/helper/Preloader";

export default function ServiceNotFound() {
  return (
    <>
      <Preloader />
      <Header />
      <Breadcrumb title="Service Not Found" />

      <div className="container space-top space-extra-bottom text-center">
        <h2 className="mb-20">Service Not Found</h2>
        <p className="text-muted mb-30">
          The service you are looking for does not exist or has been removed.
        </p>
        <Link href="/service" className="btn style2">
          Browse All Services
        </Link>
      </div>

      <FooterArea />
    </>
  );
}
