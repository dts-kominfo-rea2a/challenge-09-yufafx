// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";
import "./Contact.css";

const Contact = ({ data }) => {
  return (
    <div className="contact">
      <section className="left">
        <img src={data.photo} alt="foto kucing"></img>
      </section>
      <section className="right">
        <p className="name">{data.name}</p>
        <p>{data.phone}</p>
        <p>{data.email}</p>
      </section>
    </div>
  );
};

export default Contact;
