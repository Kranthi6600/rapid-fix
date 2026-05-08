"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const HeaderFive = () => {
  const [active, setActive] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    var offCanvasNav = document.getElementById("offcanvas-navigation");
    var offCanvasNavSubMenu = offCanvasNav.querySelectorAll(".sub-menu");

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML(
        "beforebegin",
        "<span class='mean-expand-class'>+</span>"
      );
    }

    var menuExpand = offCanvasNav.querySelectorAll(".mean-expand-class");
    var numMenuExpand = menuExpand.length;

    function sideMenuExpand() {
      if (this.parentElement.classList.contains("active") === true) {
        this.parentElement.classList.remove("active");
      } else {
        for (let i = 0; i < numMenuExpand; i++) {
          menuExpand[i].parentElement.classList.remove("active");
        }
        this.parentElement.classList.add("active");
      }
    }

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", sideMenuExpand);
    }
    window.onscroll = () => {
      if (window.pageYOffset < 150) {
        setScroll(false);
      } else if (window.pageYOffset > 150) {
        setScroll(true);
      }
      return () => (window.onscroll = null);
    };
  }, []);

  const mobileMenu = () => {
    setActive(!active);
  };
  return (
    <header className="nav-header header-layout4">
      <div className={`sticky-wrapper ${scroll && "sticky"}`}>
        {/* Main Menu Area */}
        <div className="menu-area">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-auto d-lg-none d-block">
                <div className="header-logo">
                  <Link href="/">
                    <img src="/assets/logo.png" alt="Rapid Fix" width={150} />
                  </Link>
                </div>
              </div>
              <div className="col-auto d-xl-block d-none header-sticky-none">
                <div className="header-logo">
                  <Link href="/">
                    <img src="/assets/logo.png" alt="Rapid Fix" width={150} />
                  </Link>
                </div>
              </div>
              <div className="col-auto header-sticky-logo">
                <div className="header-logo">
                  <Link href="/">
                    <img src="/assets/logo.png" alt="Rapid Fix" width={150} />
                  </Link>
                </div>
              </div>
              <div className="col-auto">
                <nav className="main-menu d-none d-lg-inline-block">
                  <ul>
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/about">About Us</Link>
                    </li>
                    <li>
                      <Link href="/service">Services</Link>
                    </li>
                    <li>
                      <Link href="/blog">Blog</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
                <div className="navbar-right d-inline-flex d-lg-none">
                  <button
                    type="button"
                    className="menu-toggle icon-btn"
                    onClick={mobileMenu}
                  >
                    <i className="fas fa-bars" />
                  </button>
                </div>
              </div>
              <div className="col-auto d-lg-block d-none header-lg-sticky-none">
                <div className="navbar-right-desc">
                  <div className="icon">
                    <svg
                      width={25}
                      height={25}
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.625 0C5.375 0 0 2.875 0 6.25V7.125C0 8 0.75 8.625 1.625 8.75H4.875C6 8.75 6.625 7.375 6.25 6.25C5.625 5.375 6.25 4.125 7.25 3.875C10.75 3.125 14.25 3.125 17.875 3.875C19 4.125 19.5 5.25 18.875 6.25C18.5 7.375 19.125 8.625 20.25 8.75H23.5C24.375 8.75 25.125 8 25.125 7.125V6.25C25 2.75 19.5 0 12.625 0Z"
                        fill="var(--theme-color)"
                      />
                      <path
                        d="M19.125 9.375C18.875 9 18.5 8.75 18 8.75H16.25V6.875C16.25 6.5 16 6.25 15.625 6.25H14.375C14 6.25 13.75 6.5 13.75 6.875V8.75H11.25V6.875C11.25 6.5 11 6.25 10.625 6.25H9.375C9 6.25 8.75 6.5 8.75 6.875V8.75H7C6.5 8.75 6.125 9 5.875 9.375C4 12.625 1.25 16.75 1.25 23.75C1.25 24.375 1.75 25 2.5 25H22.5C23.25 25 23.75 24.375 23.75 23.75C23.75 16.75 20.875 12.375 19.125 9.375ZM12.5 22.5C9.75 22.5 7.5 20.25 7.5 17.5C7.5 14.75 9.75 12.5 12.5 12.5C15.25 12.5 17.5 14.75 17.5 17.5C17.5 20.25 15.25 22.5 12.5 22.5Z"
                        fill="var(--theme-color)"
                      />
                      <path
                        d="M12.5 20C13.8807 20 15 18.8807 15 17.5C15 16.1193 13.8807 15 12.5 15C11.1193 15 10 16.1193 10 17.5C10 18.8807 11.1193 20 12.5 20Z"
                        fill="var(--theme-color)"
                      />
                    </svg>
                  </div>
                  <div className="navbar-right-desc-details">
                    <a className="link" href="tel:(437) 836-4848">
                      (437) 836-4848
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="logo-bg" />
        </div>
        {/* Mobile Menu */}
        <div className={`mobile-menu-wrapper  ${active && "body-visible"}`}>
          <div className="mobile-menu-area">
            <div className="mobile-logo">
              <Link href="/">
                <img src="F:\Wehoware\projects\rapid fix\public\assets\logo.png" alt="Rapid Fix" />
              </Link>
              <button className="menu-toggle" onClick={mobileMenu}>
                <i className="fa fa-times" />
              </button>
            </div>
            <div className="mobile-menu">
              <ul id="offcanvas-navigation">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>

                <li className="menu-item-has-children submenu-item-has-children">
                  <Link href="/service">Service</Link>
                </li>
                
                <li className="menu-item-has-children submenu-item-has-children">
                  <Link href="/blog">Blog</Link>
                </li>

                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderFive;
