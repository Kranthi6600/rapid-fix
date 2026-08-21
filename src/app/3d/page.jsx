"use client";

import styles from "./three.module.scss";
import Navbar3D from "@/components/three/Navbar3D";
import ScrollCanvas from "@/components/three/ScrollCanvas";
import MobileHero3D from "@/components/three/MobileHero3D";
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
        <div className={styles["heroDesktop"]}>
          <ScrollCanvas />
        </div>
        <div className={styles["heroMobile"]}>
          <MobileHero3D />
        </div>
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
