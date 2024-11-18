import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact us</h2>
      <div className="contact-item">
        <strong>Prof. Dipendu Bhunia</strong>, Faculty In-charge (EMU)
        <br />
        Cell: <a href="tel:9649493202">9649493202</a>, Email:{" "}
        <a href="mailto:dbhunia@pilani.bits-pilani.ac.in">
          dbhunia@pilani.bits-pilani.ac.in
        </a>
      </div>
      <div className="contact-item">
        <strong>Mr. Mahendra Kr. Sharma</strong>, STA
        <br />
        Cell: <a href="tel:9413366815">09413366815</a>
      </div>
      <div className="contact-item">
        <strong>Mr. Sandeep Goyal</strong>, TA
      </div>
      <div className="contact-item">
        <strong>Mr. Radha Raman Arora</strong>, Horticulturist
      </div>
    </div>
  );
};

export default Contact;
