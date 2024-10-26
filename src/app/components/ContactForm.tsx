import FormInput from "./FormInput";
import "../styles/Contact.css";

const ContactForm: React.FC = (): JSX.Element => {
  return (
    <form>
      <div className="row">
        <div className="col-sm-6">
          <FormInput name="name" placeholder="Name" type="text" required />
        </div>
        <div className="col-sm-6">
          <FormInput name="email" placeholder="Email" type="email" required />
        </div>
        <div className="col-sm-12">
          <textarea
            name="message"
            id="message"
            className="form-control"
            placeholder="Message"
            required
          ></textarea>
        </div>
      </div>
      <button href="#" className="btn btn-border" type="submit">
        Hire Me <span className="glyphicon glyphicon-send"></span>
      </button>
    </form>
  );
};

export default ContactForm;
