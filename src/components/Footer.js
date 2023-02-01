import * as React from "react";
import uuid from "react-uuid";
import { text_contact_buttons } from "../data/dataText";
import { BsArrowBarDown } from "react-icons/bs";

function Footer() {
  const ContactMe = () => {
    return <span className="font-x-large">Contact Me</span>;
  };

  const GetIcon = () => {
    return (
      <span className="icon-large-center">
        <BsArrowBarDown />
      </span>
    );
  };

  const Copyright = () => {
    return (
      <span className="font-x-small">
        {"Copyright © "}
        {new Date().getFullYear()}
      </span>
    );
  };

  const GetContactData = () => {
    return (
      <section className="section-row" id="font-contact-me">
        {text_contact_buttons.map((item, index) => {
          const { id, name, link, icon } = item;
          return (
            <div className="align-start contact-buttons-margin" key={id}>
              <div className="icon-small-center">{icon}</div>
              <a href={link} target="_blank" className="footer-links-fix">
                {name}
              </a>
            </div>
          );
        })}
      </section>
    );
  };

  return (
    <section className="section-footer background-footer">
      <ContactMe />
      <GetIcon />
      <GetContactData />
      <Copyright />
    </section>
  );
}

export default Footer;
