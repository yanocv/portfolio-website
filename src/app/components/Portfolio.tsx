import PortfolioItem from "./PortfolioItem";

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="site-section section-portfolio">
      <div className="container text-center">
        <h3>My Recent Works</h3>
        <img src="assets/img/lines.svg" className="img-lines" alt="lines" />
        <div className="row">
          <div className="col-md-4 col-xs-6">
            <PortfolioItem
              imgSrc="assets/img/portfolio-1.jpg"
              title="Project Title"
            />
          </div>
          <div className="col-md-4 col-xs-6">
            <PortfolioItem
              imgSrc="assets/img/portfolio-2.jpg"
              title="Project Title"
            />
          </div>
          <div className="col-md-4 col-xs-6">
            <PortfolioItem
              imgSrc="assets/img/portfolio-3.jpg"
              title="Project Title"
            />
          </div>
          <div className="col-md-4 col-xs-6">
            <PortfolioItem
              imgSrc="assets/img/portfolio-4.jpg"
              title="Project Title"
            />
          </div>
          <div className="col-md-4 col-xs-6">
            <PortfolioItem
              imgSrc="assets/img/portfolio-5.jpg"
              title="Project Title"
            />
          </div>
          <div className="col-md-4 col-xs-6">
            <PortfolioItem
              imgSrc="assets/img/portfolio-6.jpg"
              title="Project Title"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
