"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import "../styles/Navbar.css";

const Navbar: React.FC = (): JSX.Element => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleScroll = (): void => {
    setIsScrolled(window.scrollY > 50);
  };

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      id="masthead"
      className={`site-header fixed w-full transition-all duration-300 ${isScrolled ? "header-scrolled" : "header-default"}`}
    >
      <nav id="primary-navigation" className="site-navigation">
        <div className="container">
          <div className="navbar-header page-scroll">
            <button
              type="button"
              className={`navbar-toggle ${isMenuOpen ? "act" : ""}`}
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>

            <Link href="#hero" className="site-logo">
              <Image
                src="/assets/img/test.svg"
                alt="logo"
                width={100}
                height={50}
              />
            </Link>
          </div>

          <div
            className={`main-menu ${isMenuOpen ? "act" : ""}`}
            id="portfolio-perfect-collapse"
          >
            <ul className="nav navbar-nav navbar-right">
              <li className="page-scroll">
                <a href="#hero">Home</a>
              </li>
              <li className="page-scroll">
                <a href="#about">About</a>
              </li>
              <li className="page-scroll">
                <a href="#service">Service</a>
              </li>
              <li className="page-scroll">
                <a href="#portfolio">Portfolio</a>
              </li>
              <li className="page-scroll">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
