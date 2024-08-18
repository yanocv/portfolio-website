export default function PortfolioItem({ imgSrc, title }) {
  return (
    <div className="portfolio-item">
      <img src={imgSrc} className="img-res" alt={title} />
      <div className="portfolio-item-info">
        <h4>{title}</h4>
        <a href="#" data-toggle="modal" data-target="#portfolioItemModal">
          <span className="glyphicon glyphicon-eye-open"></span>
        </a>
        <a href="#">
          <span className="glyphicon glyphicon-link"></span>
        </a>
      </div>
    </div>
  );
}
