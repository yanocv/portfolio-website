import Image from "next/image";

const About: React.FC = (): JSX.Element => {
  return (
    <section className="site-section section-about text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <h2>About</h2>
            <Image
              src="assets/img/lines.svg"
              className="img-lines"
              alt="lines"
              layout="responsive"
              width={500}
              height={600}
            />
            <p>Hello! Alex, a full stuck developer...</p>
            <a
              href="http://www.grad.illinois.edu/sites/default/files/pdfs/cvsamples.pdf"
              className="btn btn-fill"
              target="_blank"
              download
              rel="noreferrer"
            >
              Download my cv
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
