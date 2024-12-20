"use client";

import Image from "next/image";

import "../styles/About.css";
import downloadFile from "../utils/download";

const About: React.FC = (): JSX.Element => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  const handleDownload = (): void => {
    downloadFile(`${basePath}/api/download`, "Resume_Hayato_Yano.pdf");
  };

  return (
    <section id="about" className="section-about text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <h2>About</h2>
            <Image
              src={`${basePath}/assets/img/lines.svg`}
              className="img-lines"
              alt="lines"
              width={60}
              height={6}
            />
            <p>
              Hello! I&apos;m Yano, a frontend developer with a passion for
              crafting high-quality code and building dynamic web applications.
              With expertise in JavaScript, TypeScript, and React, I&apos;m
              always excited to tackle new challenges. I&apos;m fluent in
              multiple languages, including English, Japanese, and Portuguese,
              which helps me collaborate effectively in diverse environments.
              Currently, I&apos;m open to freelance work, so if you have a
              project in mind or need a hand with something technical, feel free
              to reach out. Let&apos;s create something amazing together!
            </p>
            <button className="btn btn-fill" onClick={handleDownload}>
              Download my CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
