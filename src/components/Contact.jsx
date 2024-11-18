import React from "react";
import "./Contact.css";
// import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <>
     <h5 className="contactHead">Contact Me</h5>
      <section className="contact-container">
       
        {/* <div className="contact-content">
          <div style={{ flex: 2, color:"#0073b1"}}>
            <a href="mailto:dhiraj2000hatwar@gmail.com">
            <ContactInfo
              iconUrl="/assets/images/mail_3856684.png"
              text="dhiraj2000hatwar@gmail.com" 
            />
            </a>
           
            <ContactInfo
              iconUrl="/assets/images/LinkedIn.png"
              text="https://www.linkedin.com/in/dhiraj-hatwar-3a2b2000c07/"
              link="https://www.linkedin.com/in/dhiraj-hatwar-3a2b2000c07/"
            />
          </div>
          <div style={{ flex: 2 }}>
          <ContactInfo
              iconUrl="/assets/images/github_5968896.png"
              text="https://github.com/DhirajGit07"
              link="https://github.com/DhirajGit07"
            />
            <ContactInfo
              iconUrl="/assets/images/Naukari.png"
              text="https://www.naukri.com/mnjuser/profile?id=&altresid"
              link="https://www.naukri.com/mnjuser/profile?id=&altresid"
            />

          </div>
          <div style={{ flex: 2 }}></div>
        </div> */}
        <ContactForm />         
      </section>
    </>
  );
};

export default Contact;
