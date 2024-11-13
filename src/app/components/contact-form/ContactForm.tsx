"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import FormInput from "./FormInput";
import FormTextArea from "./FormTextArea";
import Modal from "./Modal";
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
  const [isFormValid, setIsFormValid] = useState(false);
  const [modalType, setModalType] = useState<"success" | "error">("success");

  useEffect(() => {
    const nameError = validateName(formData.name);
    const emailError = validateEmail(formData.email);
    const messageError = validateMessage(formData.message);

    // Set form validity based on validation
    setIsFormValid(!nameError && !emailError && !messageError);
  }, [formData]);

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

      setModalType("success");
      setIsModalOpen(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setModalType("error");
      setIsModalOpen(true);
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
      <button className="btn btn-border" type="submit" disabled={!isFormValid}>
        Hire Me <span className="glyphicon glyphicon-send"></span>
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        message={
          modalType === "success"
            ? "Your form has been submitted successfully!"
            : "We encountered an issue while sending your form. Please try again later. If the problem persists, feel free to contact us directly or reach out via LinkedIn. Thank you for your patience!"
        }
        type={modalType}
      />
    </form>
  );
};

export default ContactForm;
