import "../styles/Contact.scss";
import { useState } from "react";

export default function ContactPage() {
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    setMessage("");
    e.preventDefault();
    window.alert("Message Submited");
  }

  return (
    <div className="contact-page">
      <h1>Contact Page</h1>

      <div>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Let us know what you think..."
            className="contact-box"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button className="contact-btn">Submit</button>
        </form>
      </div>
    </div>
  );
}
