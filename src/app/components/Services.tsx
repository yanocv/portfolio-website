import ServiceItem from "./ServiceItem";

export default function ServicesSection() {
  return (
    <section
      id="service"
      className="site-section section-services overlay text-center"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3>What I do</h3>
            <img src="assets/img/lines.svg" className="img-lines" alt="lines" />
          </div>
          <div className="col-sm-4">
            <ServiceItem
              imgSrc="assets/img/front-end.svg"
              title="Front-end"
              description="As a javascript developer, I have experience in HTML5 and CSS3 techniques working with jQuery or more advanced javascript MVC frameworks such as Angular."
            />
          </div>
          <div className="col-sm-4">
            <ServiceItem
              imgSrc="assets/img/back-end.svg"
              title="Back-end"
              description="Utilising PHP frameworks such as Zend or creating bespoke code, I've written services supporting thousands of users, including REST APIs, e-learning applications, and more."
            />
          </div>
          <div className="col-sm-4">
            <ServiceItem
              imgSrc="assets/img/consultancy.svg"
              title="Consultancy"
              description="As well as providing development services, I can also help you decide strategic roadmaps via consultancy services."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
