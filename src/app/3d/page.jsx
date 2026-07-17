"use client";

import styles from "./three.module.scss";
import Navbar3D from "@/components/three/Navbar3D";
import ScrollCanvas from "@/components/three/ScrollCanvas";
import AboutParallax from "@/components/three/AboutParallax";
import ServicesParallax from "@/components/three/ServicesParallax";
import ContactParallax from "@/components/three/ContactParallax";
import BlogsParallax from "@/components/three/BlogsParallax";
import FooterParallax from "@/components/three/FooterParallax";

const ThreeDPage = () => {
  return (
    <div className={styles["three-d-page"]}>
      <Navbar3D />
      <div className={styles["three-d-content"]}>
        <ScrollCanvas />
        <AboutParallax />
        <ServicesParallax />
        <ContactParallax />
        <BlogsParallax />
        <FooterParallax />
      </div>
    </div>
  );
};

export default ThreeDPage;
