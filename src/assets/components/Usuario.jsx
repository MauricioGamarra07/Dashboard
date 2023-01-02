import React from 'react'
import '../../App.css'
import foto from '../images/image-jeremy.png'

function Usuario() {
  return (
    <>
      <div className="usuario">
        <div className="persona">
          <img src={foto} alt="" id='foto' />
          <div className="nombre">
            <p>Report for</p>
            <h1>Jeremy Robson</h1>
          </div>
        </div>
        <h3>Daily</h3>
        <h3>Weekly</h3>
        <h3>Monthly</h3>
      </div>
    </>
  )
}

export default Usuario