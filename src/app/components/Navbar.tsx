"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import "../styles/Navbar.css";

const Navbar: React.FC = (): JSX.Element => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const handleScroll = (): void => {
    setIsScrolled(window.scrollY > 50); // Adjust the scroll threshold as needed
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
        <div className="container mx-auto px-5 flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="#hero" className="site-logo">
              <Image
                src="/assets/img/yano.svg"
                alt="logo"
                width={100}
                height={50}
              />
            </Link>
          </div>

          {/* Toggle Button */}
          <button
            type="button"
            className="lg:hidden text-gray-800"
            aria-label="Toggle navigation"
          >
            <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
            <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
            <span className="block w-6 h-0.5 bg-gray-800"></span>
          </button>

          {/* Navigation Menu */}
          <div className="hidden lg:flex space-x-4">
            <ul className="flex space-x-4">
              <li>
                <Link
                  href="#hero"
                  className="text-gray-800 hover:text-blue-500"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-gray-800 hover:text-blue-500"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#service"
                  className="text-gray-800 hover:text-blue-500"
                >
                  Service
                </Link>
              </li>
              <li>
                <Link
                  href="#portfolio"
                  className="text-gray-800 hover:text-blue-500"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-800 hover:text-blue-500"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
