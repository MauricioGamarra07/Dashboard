import React from 'react'
import '../../App.css'
import puntos from '../images/icon-ellipsis.svg'

function Tablero({titulo, horas, last, color, icono, nombre}) {

  return (
    <>
      <div className="tablero" style={{backgroundColor: color}}>
        <img src={icono} alt="" id='icono' /> 
        <div className="info-tablero">
          <div className="top">
            <h3>{titulo}</h3>
            <img src={puntos} alt="" id='puntos' />
          </div>
          <h1>{horas}hrs</h1>
          <h4>Last {nombre} - {last}hrs</h4>
        </div>
      </div>
    </>
  )
}

export default Tablero