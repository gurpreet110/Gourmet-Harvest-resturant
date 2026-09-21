import { useState } from "react";

function Support() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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

    console.log("Support request:", formData);

    // Later:
    // POST /api/support
  };

  return (
    <section className="support section">
      <div className="section-container">
        <div className="section-heading">
          <p className="section-subtitle">NEED HELP?</p>
          <h2>Customer Support</h2>
        </div>

        <form className="support-form" onSubmit={handleSubmit}>
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
            Submit Request
          </button>
        </form>
      </div>
    </section>
  );
}

export default Support;