import React from "react";
import MainPart from "./MainPart";
import Sidebar from "./Sidebar";

const Home = () => {
  return (
    <div className=" container-fluid mt-5">
      <div className="row">
        <div className="col-lg-3 col-md-3 col-12">
          <Sidebar />
        </div>
        <div className="col-lg-9 col-md-9 col-12">
          <MainPart />
        </div>
      </div>
    </div>
  );
};

export default Home;
