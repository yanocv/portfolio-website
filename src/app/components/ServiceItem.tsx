import "../styles/ServiceItem.css";

interface ServiceItemProps {
  imgSrc: string;
  title: string;
  description: string;
}

export default function ServiceItem({
  imgSrc,
  title,
  description,
}: ServiceItemProps) {
  return (
    <div className="service">
      <img src={imgSrc} alt={title} />
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}
