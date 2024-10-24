import ServiceItem from "./ServiceItem";
import "../styles/Services.css";
import Image from "next/image";

export default function Services() {
  return (
    <section id="service" className="section-services overlay text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3>What I do</h3>
            <Image
              src="assets/img/lines.svg"
              className="img-lines"
              alt="lines"
              width={60}
              height={6}
            />
          </div>
          <div className="col-sm-4">
            <ServiceItem
              imgSrc="assets/img/front-end.svg"
              title="Front-end"
              description="I specialize in creating responsive, interactive, and visually appealing user interfaces using React. My experience includes working with HTML5, CSS3, JavaScript, and TypeScript focusing on building seamless and intuitive web experiences that work across all devices."
            />
          </div>
          <div className="col-sm-4">
            <ServiceItem
              imgSrc="assets/img/back-end.svg"
              title="UI/UX Design Integration"
              description="With a keen eye for design, I ensure that the user interface not only looks great but also provides an optimal user experience. I work closely with designers to bring concepts to life, ensuring that functionality and aesthetics go hand in hand for maximum impact."
            />
          </div>
          <div className="col-sm-4">
            <ServiceItem
              imgSrc="assets/img/consultancy.svg"
              title="Performance Optimization"
              description="I prioritize performance in every project, ensuring fast loading times and inclusive experiences. I am experienced in optimizing web applications to meet modern web standards, making sure they are efficient and accessible to all users."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
