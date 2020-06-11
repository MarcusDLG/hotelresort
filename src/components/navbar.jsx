import React, { Component, useState } from "react";
import logo from "../images/logo.svg";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const navbar = () => {
  let state = { isOpen: false };
  const handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  return (
    <nav className="navbar">
      <section className="nav-center">
        <section className="nav-header">
          <Link to="/">
            <img src={logo} alt="beach resort" />
          </Link>
          <button type="button" className="nav-btn" onClick={handleToggle}>
            <FaAlignRight className="nav-icon" />
          </button>
        </section>
        <ul className="nav-links show-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/rooms">Rooms</Link>
          </li>
        </ul>
      </section>
    </nav>
  );
};

export default navbar;
