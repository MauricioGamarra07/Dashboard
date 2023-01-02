import './App.css'
import Contenidotableros from './assets/components/Contenidotableros'
import Usuario from './assets/components/Usuario'

function App() {

  return (
    <div className="App">
      <div className="cont-dashboard">
        <Usuario/>
        <Contenidotableros/>
      </div>
    </div>
  )
}

export default App
