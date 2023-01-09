import React, { Fragment } from 'react'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import '../../App.css'

import foto from '../images/image-jeremy.png'
import Tablerodaily from './Tablerodaily'
import Tableromonthly from './Tableromonthly'
import Tableroweekly from './Tableroweekly'

function Usuario({ children }) {
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
        <nav className='botonera'>
          <ul>
            <Link to='/Dashboard/daily' className='enlace' onClick={() => { console.log("Daily") }}>Daily</Link>
            <Link to='/Dashboard/weekly' className='enlace' onClick={() => { console.log("Weekly") }}>Weekly</Link>
            <Link to='/Dashboard/monthly' className='enlace' onClick={() => { console.log("Monthly") }}>Monthly</Link>
          </ul>
        </nav>
      </div>
      <main>{children}</main>
    </>
  )
}

export default Usuario