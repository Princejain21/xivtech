import React from 'react'
import '../../App.css'

export default function Card(props) {
  return (
    <div>
    <p className=' dropdown-title font-weight-bold' >{props.title}</p>
    <div class="media">
  <img class="mr-3" src={props.source} className='img img-responsive' width={"150px"} height={"85px"} alt="Generic placeholder image"/>
  <div class="media-body">
    {props.description}
  </div>
</div>

    </div>
  )
}
