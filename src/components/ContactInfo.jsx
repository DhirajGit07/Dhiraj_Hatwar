


import React from "react";
import "./ContactInfo.css";

const ContactInfo = ({ iconUrl, text, link }) => {
  return (
    <div className="contact-details-card">
      <div className="icon">
        <img src={iconUrl} alt={text} />
      </div>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className="contact-link">
          <p>{text}</p>
        </a>
      ) : (
        <p>{text}</p>
      )}
    </div>
  );
};

export default ContactInfo;
