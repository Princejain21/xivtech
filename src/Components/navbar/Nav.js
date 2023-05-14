import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import Card from "./Card";
import image1 from "../../Assets/rp1.jpg";
import image2 from "../../Assets/a2.jpg";
import image3 from "../../Assets/cl2.jpg";
import image4 from "../../Assets/a1.jpg";
import {Link} from 'react-router-dom'
export default function Nav() {
  const [change, setchange] = useState(false);
  const [closeIcon, setcloseICon] = useState(false);
  const [foucsdropdown, setfocusdropdown] = useState(false);
  
  const handleMouseEnter = () => {
    setchange(true);
    setfocusdropdown(true);
  };

  
  const handleMouseLeave = () => {
    setchange(false);
  };

  const DropdownElement = () => {
    return (
      <div
        className="row mx-auto d-flex justify-content-center align-items-center "
        style={{ backgroundColor: "transparent" }}
      >
        <div className="col-md-5 col-sm-10  m-4 ">
          <Card
            title="Complete AI + RPA Automation"
            source={image1}
            description={<p className="ml-2">Build,Deploy and Scale Bots.</p>}
          />
        </div>
        <div className="col-md-5 col-sm-10 m-4">
          <Card
            title="Build Better Apps - The Cloud Native Way"
            source={image2}
            description={
              <p className="ml-2">
                Build Apps - Deliver new apps users love
                <br /> Modernize Apps - Rearchitect valuable legacy apps
              </p>
            }
          />
        </div>
        <div className="col-md-5 col-sm-10 m-4  ">
          <Card
            title="Simplify Cloud Ops - Apply The New Rules Or Ops"
            source={image3}
            description={
              <p className="ml-2">
                {" "}
                Kubernetes - Enterprise-ready runtime
                <br />
                CICD
              </p>
            }
          />
        </div>
        <div className="col-md-5 col-sm-10 m-4">
          <Card
            title="Cloud Services"
            source={image4}
            description={
              <p className="ml-2">
                Azure <br /> AWS
              </p>
            }
          />
        </div>
      </div>
    );
  };

  return (
    <>
      <nav
        className={`navbar shadow navbar-expand-lg ${
          change ? "bg-dark navbar-dark" : "navbar-light bg-light"
        }`}
        style={{ width: "auto" }}
      >
        <Link className="navbar-brand ml-5" to="/">
          <img
            src={require("../../Assets/logo.png")}
            className="img img-responsive"
            width="65px"
            height="65px"
            alt="..."
          />
          <img
            src={require("../../Assets/logoText.png")}
            className="img img-responsive"
            width="120px"
            height="68px"
            alt="..."
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li
              className="nav-item dropdown "
              onMouseEnter={() => {
                setchange(true);
              }}
            >
              <div
                className="dropdown"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <li
                  className={`btn btn-white dropdown-toggle ${
                    change ? "text-white" : ""
                  }`}
                  onClick={() => {
                    setfocusdropdown(!foucsdropdown);
                  }}
                >
                  Services
                </li>
              </div>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="#">
                Careers <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            {closeIcon && (
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            )}
            {closeIcon && (
              <AiOutlineClose
                onClick={() => {
                  setcloseICon(!closeIcon);
                }}
              />
            )}
            {!closeIcon && (
              <FaSearch
                color={change ? "white" : ""}
                onClick={() => {
                  setcloseICon(!closeIcon);
                }}
              />
            )}
          </form>
          <Link
            className="btn btn-outline-primary mx-5 mb-3 border-lg border-primary font-weight-bold px-4 py-3"
            to="/contact"
          >
            Let's Talk
          </Link>
        </div>
      </nav>
      {foucsdropdown && DropdownElement()}
    </>
  );
}
