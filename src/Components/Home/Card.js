import React from 'react'

export default function Card(props) {
  return (
    <div className="card border-0 m-3" style={{width:'18rem'}}>
    <img className="card-img-top  " src={props.source} alt="Card image cap"/>
    <div className="card-body" >
      <h5 className="card-title text-white">{props.title}</h5>
      {props.description}
    </div>
  </div>
  )
}
