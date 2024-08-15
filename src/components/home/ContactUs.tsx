import React, { useState } from "react";
import Button from "../ui/Button";

interface ContactFormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ErrorState {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<ErrorState>({});
  const [formStatus, setFormStatus] = useState<string>("");

  const validateForm = (): boolean => {
    const errors: ErrorState = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!formData.subject) errors.subject = "Subject is required";
    if (!formData.message) errors.message = "Message is required";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (validateForm()) {
      setErrors({});
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setFormStatus("Form submitted successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    } else {
      setFormStatus("Please fix the errors before submitting.");
    }
  };

  return (
    <div className="flex justify-center items-center w-full">
      <div className="container px-4 lg:px-40 py-4 flex justify-center items-center w-full lg:w-3/4">
        <div className="p-4 lg:p-8 rounded-lg shadow-md bg-[#4b0082]/50 backdrop-blur-lg w-full">
          <h2 className="text-xl lg:text-2xl font-bold mb-2 lg:mb-4 text-center">
            Contact Us
          </h2>
          <form onSubmit={handleSubmit} className="space-y-2">
            <div>
              <div className="flex justify-between items-center w-full">
                <label className="block font-medium mb-1" htmlFor="name">
                  Name <span className="text-red-500">*</span>
                </label>
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name}</p>
                )}
              </div>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full p-2 border bg-transparent outline-none ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } rounded-md`}
              />
            </div>
            <div>
              <div className="flex justify-between items-center w-full">
                <label className="block font-medium mb-1" htmlFor="email">
                  Email<span className="text-red-500">*</span>
                </label>
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-2 border bg-transparent outline-none ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-md`}
              />
            </div>
            <div>
              <div className="flex justify-between items-center w-full">
                <label className="block font-medium mb-1" htmlFor="subject">
                  Subject <span className="text-red-500">*</span>
                </label>
                {errors.subject && (
                  <p className="text-red-500 text-sm">{errors.subject}</p>
                )}
              </div>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full p-2 border bg-transparent outline-none ${
                  errors.subject ? "border-red-500" : "border-gray-300"
                } rounded-md`}
              />
            </div>
            <div>
              <div className="flex justify-between items-center w-full">
                <label className="block font-medium mb-1" htmlFor="message">
                  Message <span className="text-red-500">*</span>
                </label>
                {errors.message && (
                  <p className="text-red-500 text-sm">{errors.message}</p>
                )}
              </div>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`w-full p-2 border bg-transparent outline-none ${
                  errors.message ? "border-red-500" : "border-gray-300"
                } rounded-md h-24`}
              />
            </div>
            <Button text="Submit" type="submit" className="w-full" />
            {formStatus && (
              <p className="mt-4 text-center text-sm">{formStatus}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
