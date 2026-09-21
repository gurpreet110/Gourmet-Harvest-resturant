import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Contact data:", formData);

    // Later:
    // POST /api/contact
  };

  return (
    <section id="contact" className="contact section">
      <div className="section-container">
        <div className="section-heading">
          <p className="section-subtitle">GET IN TOUCH</p>
          <h2>Contact Us</h2>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>We'd love to hear from you</h3>

            <p>
              Have a question, feedback or want to know more about
              Gourmet Harvest? Send us a message.
            </p>

            <div className="contact-detail">
              <strong>Phone</strong>
              <p>+91 98765 43210</p>
            </div>

            <div className="contact-detail">
              <strong>Email</strong>
              <p>info@gourmetharvest.com</p>
            </div>

            <div className="contact-detail">
              <strong>Address</strong>
              <p>Delhi, India</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn primary-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;