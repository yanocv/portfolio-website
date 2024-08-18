import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="site-section section-form text-center">
      <div className="container">
        <h3>Contact</h3>
        <img src="assets/img/lines.svg" className="img-lines" alt="lines" />
        <ContactForm />
      </div>
    </section>
  );
}
