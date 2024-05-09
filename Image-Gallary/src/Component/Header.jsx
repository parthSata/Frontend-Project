import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="flex justify-between items-center">
        <ul className="flex flex-row gap-10">
          <Link to="/#">
            <i className="fa-brands fa-facebook fa-lg"></i>
          </Link>
          <Link className="" to="#">
            <i className="fa-brands fa-twitter fa-lg"></i>
          </Link>
          <Link to="#">
            <i className="fa-brands fa-instagram fa-lg"></i>
          </Link>
        </ul>

        <ul className="flex flex-row gap-10 font-medium text-lg">
          <Link className="" to="/">
            Home
          </Link>
          <Link className="" to="/about">
            About
          </Link>
          <Link className="" to="/gallary">
            Gallary
          </Link>
          <Link className="" to="/contact">
            Contact
          </Link>
        </ul>

        <ul className="flex flex-row gap-10">
          <Link to="#" className="">
            <i className="fa-solid fa-magnifying-glass fa-lg"></i>
          </Link>
          <Link to="#" className="">
            <i className="fa-solid fa-cart-shopping fa-lg"></i>
          </Link>
        </ul>
      </div>
    </>
  );
}

export default Header;
