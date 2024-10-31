import Image from "next/image";
import "../styles/ServiceItem.css";

interface ServiceItemProps {
  imgSrc: string;
  title: string;
  description: string;
}

export default function ServiceItem({
  imgSrc,
  title,
  description
}: ServiceItemProps): JSX.Element {
  return (
    <div className="service">
      <Image src={imgSrc} alt={title} width={50} height={50} />
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}
