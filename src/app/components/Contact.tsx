import Image from "next/image";
import ContactForm from "./ContactForm";

const ContactSection: React.FC = (): JSX.Element => {
  return (
    <section id="contact" className="site-section section-form text-center">
      <div className="container">
        <h3>Contact</h3>
        <Image
          src="assets/img/lines.svg"
          className="img-lines"
          alt="lines"
          width={100}
          height={50}
        />
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;
