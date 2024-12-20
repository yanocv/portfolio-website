import Image from "next/image";
import "../styles/Hero.css";

const Hero: React.FC = (): JSX.Element => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return (
    <div id="hero" className="hero bg-gray-200 ">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>Yano Hayato</h1>
            <div className="page-scroll">
              <p className="job-title">Frontend Developer</p>
              <a href="#contact" className="btn btn-fill ">
                Hire me
              </a>
              <div className="clearfix visible-xxs"></div>
              <a href="#portfolio" className="btn btn-border">
                Explore more
              </a>
            </div>
          </div>

          <div className="col-md-6 text-right">
            <Image
              src={`${basePath}/assets/img/avatar.png`}
              alt="my photo"
              width={500}
              height={600}
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
