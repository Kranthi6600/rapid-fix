"use client";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

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
  return null;
};

export default Animation;
