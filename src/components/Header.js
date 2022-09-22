import React from "react";
import uuid from "react-uuid";
import { text_header_buttons } from "../data/dataText";

function Header() {
  const GetSymbolsLinks = () => {
    return (
      <section className="header-container">
        {text_header_buttons.map((item, index) => {
          const { id, link, icon } = item;
          if (id !== 1) {
            return (
              <div className="align-start contact-buttons-margin" key={uuid()}>
                <a href={link}>
                  <div className="icon-small-center">{icon}</div>
                </a>
              </div>
            );
          } else {
            return (
              <div className="align-start contact-buttons-margin" key={uuid()}>
                <a href={link} className="link-disabled">
                  <div className="icon-small-center icon-disabled">{icon}</div>
                </a>
              </div>
            );
          }
        })}
      </section>
    );
  };
  return (
    <div className="header background-white">
      <GetSymbolsLinks />
    </div>
  );
}

export default Header;
