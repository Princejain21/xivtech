import React from "react";
import {Link} from 'react-router-dom'
import './contact.css'
import Form from "./Form";
import './contact.css'

export default function Contact() {
  return (
    <div>
        {/* pagination here........... */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/xivtech">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            contact
          </li>
        </ol>
      </nav>
{/*  contact form here.............. */}
<div className="row">
<div className="col-md-5 col-sm-12 p-5 d-flex justify-content-center" style={{backgroundColor:'#f3f0f0'}}>
<div className="w-50">
    <p style={{fontSize:'2.5rem'}}>Contact Sales</p>
    <p>Our sales team is here to help you find the right solutions — so you can grow your business, increase efficiency and deliver the future. Submit the form to get started.</p>
</div>

</div>
<div className="col-md-7 col-sm-12 bg-primary p-4 parentformdiv" style={{backgroundColor:"#3e3eca"}}>
    <Form/>
</div>

</div>







    </div>
  );
}
