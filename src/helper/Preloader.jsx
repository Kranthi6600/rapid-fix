"use client";
import { useEffect, useState } from "react";

const Preloader = () => {
  let [active, setActive] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setActive(false);
    }, 2000);
  }, []);
  return (
    <>
      {active === true && (
        <div className="preloader ">
          <div className="preloader-inner">
            <span className="loader"> </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Preloader;
