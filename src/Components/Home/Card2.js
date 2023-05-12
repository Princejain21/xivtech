import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Card2(props) {
  return (
    <div className="col-7 mx-auto my-3  animated fadeInUp" style={{animationDelay:props.delay}}>
      {!props.show ? (
        <p className="font-weight-bold my-5" style={{ fontSize: "1.5rem" }}>
          {props.title}
        </p>
      ) : (
        <Link
          className="font-weight-bold my-5 text-dark"
          style={{ fontSize: "1.5rem" }}
          to="/"
        >
          {props.title}
          <FaArrowRight />
        </Link>
      )}
      <div className="row">
        <div className=" col-sm-6 ">
          <h1
            className="my-4 media-heading nav-link"
            style={{ fontSize: "300%" }}
          >
            {props.heading}
          </h1>
          <p className="" style={{ fontFamily: "serif", fontSize: "1.5rem" }}>
            {props.description}
          </p>
        </div>

        <div className=" col-sm-6 ">
          <img src={props.source} alt="..." className="img img-fluid" />
        </div>
      </div>

      {props.showbutton && (
        <button
          className="btn getintouchbtn mt-5 px-5 py-3"
          style={{ backgroundColor: "black" }}
        >
          {" "}
          Get in Touch
        </button>
      )}
    </div>
  );
}
