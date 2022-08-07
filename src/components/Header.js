import React from "react";
import uuid from "react-uuid";
import { text_header_buttons } from "../data/dataText";

function Header() {
  const GetSymbolsLinks = () => {
    return (
      <section className="header-container">
        {text_header_buttons.map((item, index) => {
          const { id, link, icon } = item;
          return (
            <div className="align-start contact-buttons-margin" key={uuid()}>
              <a href={link}>
                <div className="icon-small-center">{icon}</div>
              </a>
            </div>
          );
        })}
      </section>
    );
  };
  return (
    <div className="header">
      <GetSymbolsLinks />
    </div>
  );
}

export default Header;
