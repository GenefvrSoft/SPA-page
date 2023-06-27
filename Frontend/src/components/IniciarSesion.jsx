import axios from "axios"
import { useForm } from "../utils/useForm"
import { endpoint } from "../utils/rutasServidor"
import { alertErrors } from "../utils/alerts"

function IniciarSesion() {

  const {values, handleInputChange, reset} = useForm({correo: '', password: ''});


  const handleSubmit = async(e) => {
     e.preventDefault()
     for (const value of Object.values(values) ) if(!value) return alertErrors('Todos los campos son obligatorios');  // validar que los campos no esten vacios.
     const {data} = await axios.post(endpoint('iniciar-sesion'), values);
     if (data.error) return alertErrors(data.msg);
     reset();
     localStorage.setItem('token', data.token)
     localStorage.setItem('cuenta', JSON.stringify(data.cuenta))
     location.href = '/'
  }


  return (
    <div className="Formulario">
        <h2 className="tituloRegistro">Iniciar Sesion</h2>
        <form className="inicio-sesion" onSubmit={handleSubmit}>  
            <div>                     
                <label>Correo</label> 
                <input type="text" onChange={handleInputChange} name="correo" value={values.correo} />
            </div>
            <div>
                <label>Password</label> 
                <input type="password" onChange={handleInputChange} name="password" value={values.password} />
            </div>
            <button>Iniciar Sesión</button>
        </form>
    </div>
  )
}

export default IniciarSesion