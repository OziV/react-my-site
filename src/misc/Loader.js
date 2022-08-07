import React from "react";
import { ThreeDots } from "react-loader-spinner";

function Loader() {
  return (
    <section className="section">
      <div className="icon-large-center">
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#2C403C"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </div>
    </section>
  );
}

export default Loader;
