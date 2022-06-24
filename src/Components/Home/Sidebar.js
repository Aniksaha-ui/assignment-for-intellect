import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <div className="card p-3 rounded-20 create-user ">
        <h3 className="text-center text-white">Create New</h3>
      </div>

      <div className="card  p-3 rounded-20 mt-3">
        <div className="d-flex ms-3">
          <Link to="/" className="nav-item text-dark">
            <i class="fa-solid fa-bars fa-xl"></i>
          </Link>
          <p className="ms-2">Dashboard</p>
        </div>
        <div className="d-flex ms-3 mt-1">
          <Link to="/" className="nav-item text-dark">
            <i class="fa-solid fa-chart-column fa-xl"></i>
          </Link>
          <p className="ms-2">Chart</p>
        </div>
        <div className="d-flex ms-3 mt-1">
          <Link to="/" className="nav-item text-dark">
            <i class="fa-solid fa-file fa-xl"></i>
          </Link>
          <p className="ms-2">Page Layout</p>
        </div>
      </div>
      <div className="card  p-3 rounded-20 mt-4">
        <div className="d-flex ms-3">
          <Link to="/" className="nav-item text-dark">
            <i class="fa-solid fa-inbox fa-xl"></i>
          </Link>
          <p className="ms-2">inbox</p>
        </div>
        <div className="d-flex ms-3 mt-1">
          <Link to="/" className="nav-item text-dark">
            <i class="fa-solid fa-ticket fa-xl"></i>
          </Link>
          <p className="ms-2">Ticket</p>
        </div>
        <div className="d-flex ms-3 mt-1">
          <Link to="/" className="nav-item text-dark">
            <i class="fa-solid fa-calendar-days fa-xl"></i>
          </Link>
          <p className="ms-2">Extra</p>
        </div>
      </div>
      <div className="card p-3 rounded-20 mt-4 mb-4">
        <div className="d-flex ms-3">
          <Link to="/" className="nav-item text-dark">
            <i class="fa-brands fa-uikit fa-xl"></i>
          </Link>
          <p className="ms-2">UI Element</p>
        </div>
        <div className="d-flex ms-3 mt-1">
          <Link to="/" className="nav-item text-dark">
            <i class="fa-solid fa-address-card fa-xl"></i>
          </Link>
          <p className="ms-2">Cards</p>
        </div>
        <div className="d-flex ms-3 mt-1">
          <Link to="/" className="nav-item text-dark">
            <i class="fa-solid fa-clipboard fa-xl"></i>
          </Link>
          <p className="ms-2">Component</p>
        </div>
        <div className="d-flex ms-3 mt-1">
          <Link to="/" className="nav-item text-dark">
            <i class="fa-solid fa-table-cells-large"></i>
          </Link>
          <p className="ms-2">Widget</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
