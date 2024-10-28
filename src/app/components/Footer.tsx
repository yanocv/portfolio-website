"use client";

import "../styles/Footer.css";
import { FaLinkedin, FaGithub, FaAngleUp } from "react-icons/fa";

export default function Footer(): JSX.Element {
  const handleScrollToTop = (): void => {
    const topElement = document.getElementById("hero");
    if (topElement) {
      topElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="colophon" className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-4 col-xs-12">
            <a
              className="icon linkedin-bg"
              href="https://www.linkedin.com/in/yanocv/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              className="icon github-bg"
              href="https://github.com/yanocv"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>
          <div className="col-sm-4 col-sm-offset-0 col-xs-6 col-xs-offset-3">
            <p className="copyright">2024. All Rights Reserved</p>
          </div>
          <div className="col-sm-4 col-xs-3">
            <div className="text-right page-scroll">
              <a className="icon icon-up-bg" onClick={handleScrollToTop}>
                <FaAngleUp />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
