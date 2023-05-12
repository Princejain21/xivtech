import React from "react";
import { Link } from "react-router-dom";


export default function FootCol(props) {

  return (
    <div className="col-lg-3 col-md-6 col-sm-10">
      {props.titleType ? (
        <p className="font-weight-bold" style={{ fontSize: "larger" }}>
          {props.title}
        </p>
      ) : (
        <Link
          className="font-weight-bold px-3 text-white mb-5"
          to="/"
          style={{ fontSize: "larger",textDecoration:'none' }}
        >
          {props.title}
        </Link>
      )}
<br/>
      {
        props.withoutLinks.map((elem,index)=>{
return <p key={index}>{elem}</p>
        })
      }
      {
        props.links.map((elem,index)=>{
            return <Link className="nav-link text-white" to="/" key={index}>{elem}</Link>
        })
      }
    </div>
  );
}
