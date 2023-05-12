import React from 'react'

export default function Form(props) {
  const mandatory=()=>{
    return <span className='text-danger'>*</span>
  }
  return (
    <form className='bg-white p-5 w-75 contact-form my-5' onSubmit={(e)=>{e.preventDefault();alert('form filled successfully.')}}>
    <div className="form-row">
      <div className="form-group col-md-6">
        <label htmlFor="FirstName">FirstName{mandatory()}</label>
        <input type="text" className="form-control" id="FirstName" name='FirstName' placeholder="FirstName"/>
      </div>
      <div className="form-group col-md-6">
        <label htmlFor="LastName">LastName</label>
        <input type="text" className="form-control" id="LastName" name='LastName' placeholder="LastName"/>
      </div>
    </div>
    <div className="form-row">
      <div className="form-group col-md-6">
        <label htmlFor="email">Work Email{mandatory()}</label>
        <input type="email" className="form-control" id="email" placeholder="Email"/>
      </div>
      <div className="form-group col-md-6">
      <label htmlFor="mno">Buisness Phone{mandatory()}</label>
      <input type="text" className="form-control" id="mno" name="mno" placeholder="Mobile No.."/>
    </div>
    </div>
      <div className="form-group ">
      <label htmlFor="jobRole">Job Role{mandatory()}</label>
      <input type="text" className="form-control" id="jobRole" name="jobRole" placeholder="jobRole"/>
      </div>
      <div className="form-group">
    <label htmlFor="exampleFormControlSelect1">Select a Country</label>
    <select className="form-control" id="exampleFormControlSelect1" > 
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
    <div className="form-group">
      <label htmlFor="Company">Company{mandatory()}</label>
      <input type="text" className="form-control" id="Company" name="Company" placeholder="Company"/>
    </div>
    <div className="form-group">
    <label htmlFor="que1">How can we assist you?</label>
    <textarea className="form-control" id="que1" rows="3"></textarea>
  </div>

<div className='form-group'>
<label htmlFor="que2">I would like to receive additional information about products, services, thought leadership and invitations to flagship events?</label>
  <div className="form-check form-check-inline ">

  <input className="form-check-input" type="radio" name="que2" id="inlineRadio1" value="yes"/>
  <label className="form-check-label" htmlFor="inlineRadio1" >Yes</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="que2" id="inlineRadio2" value="no"/>
  <label className="form-check-label" htmlFor="inlineRadio2">No</label>
</div>
</div>
<div className='form-group'>
<small>
By submitting this form, I acknowledge that someone from XivTech will contact me via email or phone to discuss my request.
</small>
</div>
<h3>CAPTCHA</h3>
    <button type="submit" className="btn text-white " style={{backgroundColor:'#dc3545'}}>Submit</button>
  </form>
  )
}
