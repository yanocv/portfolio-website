import Image from "next/image";
import ContactForm from "./ContactForm";
import "../../styles/Contact.css";

const Contact: React.FC = (): JSX.Element => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return (
    <section id="contact" className="section-form text-center">
      <div className="container">
        <h3>Contact</h3>
        <Image
          src={`${basePath}/assets/img/lines.svg`}
          className="img-lines"
          alt="lines"
          width={60}
          height={6}
        />
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
