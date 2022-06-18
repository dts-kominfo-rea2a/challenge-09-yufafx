// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";
import "./Contact.css";

const Contact = ({ name, phone, email, photo }) => {
  return (
    <div className="contact">
      <section className="left">
        <img src={photo} alt="foto kucing"></img>
      </section>
      <section className="right">
        <p className="name">{name}</p>
        <p>{phone}</p>
        <p>{email}</p>
      </section>
    </div>
  );
};

export default Contact;
