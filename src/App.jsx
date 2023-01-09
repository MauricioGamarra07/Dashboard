import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Tablerodaily from './assets/components/Tablerodaily'
import Tableromonthly from './assets/components/Tableromonthly'
import Tableroweekly from './assets/components/Tableroweekly'
import Usuario from './assets/components/Usuario'

function App() {

  return (
    <div className="App">
      <div className="cont-dashboard">
        <Router>
          <Usuario>
            <Routes>
              <Route path='/Dashboard/daily' element={<Tablerodaily />} />
              <Route path='/Dashboard/weekly' element={<Tableroweekly />} />
              <Route path='/Dashboard/monthly' element={<Tableromonthly />} />
            </Routes>
          </Usuario>
        </Router>
      </div>
    </div>
  )
}

export default App
