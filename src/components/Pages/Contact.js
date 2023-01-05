import { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(true);
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(details);
  };

  return (
    <div className="contact-form">
      <h2 className="contact-title">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-3">
          <label className="form-label">Name</label>
          <input type="text" placeholder="Name" />
          <label className="form-label">Email</label>
          <input type="email" placeholder="Email" />
          <label className="form-label">Phone</label>
          <input type="tel" placeholder="Phone" />
          <label className="form-label">Subject</label>
          <input type="text" placeholder="Subject" />
          <label className="form-label">Message</label>
          <textarea placeholder="Message" />
        </div>
        <button className="btn-contact" type="submit">
          {status}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
