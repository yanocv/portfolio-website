import React, { useState } from "react";
import axios from "axios";
import FormInput from "./FormInput";
import FormTextArea from "./FormTextArea";
import SuccessModal from "./SuccessModal";
import {
  validateName,
  validateEmail,
  validateMessage
} from "../../utils/validators";
import "../../styles/Contact.css";

const ContactForm: React.FC = (): JSX.Element => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const sendFormData = async (data: object): Promise<void> => {
    try {
      await axios.post(
        "https://ob23kgaqrj.execute-api.ap-northeast-1.amazonaws.com/prod/send-to-gmail-portfolio",
        JSON.stringify(data),
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          }
        }
      );

      setIsModalOpen(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending form data:", error);
    }
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();

    // Trigger validation on all fields
    const nameError = validateName(formData.name);
    const emailError = validateEmail(formData.email);
    const messageError = validateMessage(formData.message);

    // Check if any errors exist
    if (nameError || emailError || messageError) {
      console.log("Form has validation errors:", {
        nameError,
        emailError,
        messageError
      });
      return; // Prevent form submission
    }

    sendFormData(formData);
  };

  const handleModalClose = (): void => {
    setIsModalOpen(false);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-sm-6">
          <FormInput
            name="name"
            placeholder="Name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            validate={validateName}
          />
        </div>
        <div className="col-sm-6">
          <FormInput
            name="email"
            placeholder="Email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            validate={validateEmail}
          />
        </div>
        <div className="col-sm-12">
          <FormTextArea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            validate={validateMessage}
          />
        </div>
      </div>
      <button className="btn btn-border" type="submit">
        Hire Me <span className="glyphicon glyphicon-send"></span>
      </button>

      <SuccessModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        message="Your form has been submitted successfully!"
      />
    </form>
  );
};

export default ContactForm;
