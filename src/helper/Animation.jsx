"use client";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ScrollToTop from "react-scroll-to-top";

const Animation = () => {
  useEffect(() => {
    Aos.init({
      offset: 80,
      easing: "ease-out-cubic",
      once: true,
      duration: 800,
    });
    Aos.refresh();
  }, []);
  return (
    <>
      <ScrollToTop smooth color="#E8092E" />
    </>
  );
};

export default Animation;
