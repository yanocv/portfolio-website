export default function ServiceItem({ imgSrc, title, description }) {
  return (
    <div className="service">
      <img src={imgSrc} alt={title} />
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}
