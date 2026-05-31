"use client";
import { useEffect, useState } from "react";

const Preloader = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("preloaderSeen");
    if (!seen) {
      setActive(true);
      const timer = setTimeout(() => {
        setActive(false);
        sessionStorage.setItem("preloaderSeen", "true");
      }, 400);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!active) return null;

  return (
    <div className="preloader">
      <div className="preloader-inner">
        <span className="loader" />
      </div>
    </div>
  );
};

export default Preloader;
