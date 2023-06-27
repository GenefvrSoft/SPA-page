import HomePage from "./components/HomePage"
import Navbar from "./components/Navbar"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Vlog from "./components/vlog/vlog"
import RegistroUser from "./components/RegistroUser"
import IniciarSesion from "./components/IniciarSesion"
import Cardreceta from "./components/Vlog/Cardreceta"
import Cardsalud from "./components/Vlog/Cardsalud"
import Cardbelleza from "./components/Vlog/Cardbelleza"


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>    
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/vlog" element={<Vlog /> } />
          <Route path="/registro" element={<RegistroUser />} />
          <Route path="/sesion" element={<IniciarSesion />} />
          <Route path="/recetas" element={<Cardreceta />} />
          <Route path="/salud" element={<Cardsalud />} />
          <Route path="/belleza" element={<Cardbelleza />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
