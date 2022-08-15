import React from "react";
import { useTitle } from "../custom_hooks/useTitle";
import { text_title, text_personal, text_data } from "../data/dataText";
import { MdOutlineLaptopChromebook } from "react-icons/md";

function Profile() {
  const { title } = useTitle(text_title[0].name);

  const GetText = () => {
    const text_i = text_data[0].info;
    const firstName = text_personal[0].info;
    const lastName = text_personal[1].info;
    const text_fs = text_data[1].info;
    const text_searching = text_data[2].info;

    return (
      <p>
        <div className="section-center">
          <span className="align-start">
            <span className="font-large">
              {text_i}{" "}
              <span className="icon-background">{`${firstName} ${lastName}`}</span>
            </span>
            <br />
            <span className="font-medium">{text_fs}</span>
            <br />
            <span className="font-small">{text_searching}</span>
            <br />
          </span>
          <span className="icon-large-left">
            <MdOutlineLaptopChromebook />
          </span>
        </div>
      </p>
    );
  };

  return (
    <section className="section section-top section-fix">
      {title}
      <GetText />
    </section>
  );
}

export default Profile;
