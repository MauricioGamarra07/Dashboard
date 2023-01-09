import React from 'react'
import Tablero from './Tablero'
import '../../App.css'

import deporte from '../images/icon-exercise.svg'
import play from '../images/icon-play.svg'
import work from '../images/icon-work.svg'
import social from '../images/icon-social.svg'
import study from '../images/icon-study.svg'
import salud from '../images/icon-self-care.svg'

import datos from '../../../data.json'

function Tableromonthly() {
  return (
    <>
        <div className="cont-tableros">
        <Tablero titulo={datos[0].title} horas={datos[0].timeframes.monthly.current} last={datos[0].timeframes.monthly.previous} color={"hsl(15, 100%, 70%)"} icono={work} nombre={"month"} />
        <Tablero titulo={datos[1].title} horas={datos[1].timeframes.monthly.current} last={datos[1].timeframes.monthly.previous} color={"hsl(195, 74%, 62%)"} icono={play} nombre={"month"} />
        <Tablero titulo={datos[2].title} horas={datos[2].timeframes.monthly.current} last={datos[2].timeframes.monthly.previous} color={"hsl(348, 100%, 68%)"} icono={study} nombre={"month"} />
        <Tablero titulo={datos[3].title} icono={deporte} horas={datos[3].timeframes.monthly.current} last={datos[3].timeframes.monthly.previous} nombre={"month"} />
        <Tablero titulo={datos[4].title} horas={datos[4].timeframes.monthly.current} last={datos[4].timeframes.monthly.previous} color={"hsl(264, 64%, 52%)"} icono={social} nombre={"month"} />
        <Tablero titulo={datos[5].title} horas={datos[5].timeframes.monthly.current} last={datos[5].timeframes.monthly.previous} color={"hsl(43, 84%, 65%)"} icono={salud} nombre={"month"} />
      </div>
    </>
  )
}

export default Tableromonthly