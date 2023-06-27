import axios from "axios"
import { useState } from "react"
import { endpoint } from "../utils/rutasServidor"
import { alertErrors, alertSuccess } from "../utils/alerts"

function Servicios() {
  const [reservandoProcess, setReservandoProcess] = useState({active: false, is_premium: null})


  const reservar = async(is_premium) =>{
    const token = localStorage.getItem('token')
    const cuenta = JSON.parse(localStorage.getItem('cuenta'))

    if (!token) return alertErrors('Debes iniciar sesion para poder reservar.');
    setReservandoProcess({active: true, is_premium})
    const {data} = await axios.post(endpoint('registrar-reservacion'), {token,fecha: new Date().toLocaleString(), is_premium, UsuarioId: cuenta.id, correo_usuario: cuenta.correo})
    setReservandoProcess({active: false, is_premium: null})
    if( data.error ) return alertErrors(data.error);
    console.log(data)
    alertSuccess('La reservación ha sido agendada, revisa tu correo electronica para más detalles.')  }

  return (
    <div className='service' id="servicios">
        <h3 className="tituloSeccion">Servicios</h3>
        <div className="contenedor">
            <div className='cardService'>
                <div>
                  <h2 className="titulocard">Plan Basic</h2>
                  <p>· Limpieza Facial profunda + Microdermoabrasión</p>
                  <p>· Limpieza de cutis</p>
                  <p>· Exfoliación</p>
                  <p>· Depilación de cejas + bozo y de regalo un sombreado</p>
                  <p>· Masaje corporal + vapor de sauna + minutos en jacuzzi</p>
                  <p className="precio">Precio: $30</p>
                </div>
               <div>
                  
                  <button className="reservar" onClick={() => reservar(false)}>{reservandoProcess.active && reservandoProcess.is_premium === false ? 'Reservando...' : 'Reservar'}</button>
               </div>
            </div>    
            <div className="cardService">
                <h2 className="titulocard">Plan Premium</h2>
                <div>
                  <p>· Limpieza Facial profunda + Microdermoabrasión</p>  
                  <p>· Limpieza de cutis + Exfoliación</p>
                  <p>· Depilación de cejas + bozo y de regalo un sombreado</p> 
                  <p>· Masaje corporal + vapor de sauna + minutos en jacuzzi</p>
                  <p>· Masaje relajante + masaje anti-estrés</p>
                  <p>· Sesión de aromaterapia + yoga</p>
                  <p>· Depilación de dos áreas del cuerpo y la tercera gratis</p>
                  <p>· Peeling Ultrasónico Facial</p>
                  <p>· Mascarilla (según el tipo de piel)</p>
                  <p className="precio">Precio: $70</p>

                </div>

                <div>
                  <button className="reservar" onClick={() => reservar(true)}>{reservandoProcess.active && reservandoProcess.is_premium === true ? 'Reservando...' : 'Reservar'}</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Servicios