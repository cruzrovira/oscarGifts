import React, { createRef } from "react";

const NavBar = ({ shear }) => {
  const searchRef = createRef();

  const searchGifts = (e) => {
    e.preventDefault();
    let searData = searchRef.current.value;
    if (searData.length === 0) {
      searData = "panda";
    }
    shear(searData);
    e.target.reset();
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="#!">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#!">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#!">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#!">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link disabled"
              href="#!"
              tabIndex={-1}
              aria-disabled="true"
            >
              Disabled
            </a>
          </li>
        </ul>
        <form className="form-inline" onSubmit={searchGifts}>
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            ref={searchRef}
          />
          <button className="btn btn-light my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default NavBar;
