import React from "react";

const Banner = () => {
  return (
    <div className="card bg-custom p-2">
      <div className="d-flex align-items-center justify-content-center">
        <h3>
          Welcome
          <br></br> <span className="text-primary">Pablo Nicolus</span>
        </h3>
        <img
          className="img-fluid ms-5"
          width="350"
          src="https://dashboardbuilder.net/images/main-banner-new-min.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
