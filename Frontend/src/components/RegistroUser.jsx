import axios from 'axios'
import { endpoint } from "../utils/rutasServidor"
import { useForm } from "../utils/useForm"
import { alertErrors } from '../utils/alerts'


function RegistroUser() {

   const {values, handleInputChange, reset} = useForm({nombre: '', edad: '', correo: '', password: '', ubicacion: '', genero: '' });


   const handleSubmit = async(e) => {
      e.preventDefault()
      for (const value of Object.values(values) ) if(!value) return alertErrors('Todos los campos son obligatorios');  // validar que los campos no esten vacios.
      const {data} = await axios.post(endpoint('registro-user'), values);
      console.log(data)
      if (data.error) return alertErrors(data.msg);
      reset();
      localStorage.setItem('token', data.token)
      localStorage.setItem('cuenta', JSON.stringify(data.registro))
      location.href = '/';
   }

  return (
    <div className="Formulario">
        <h2 className="tituloRegistro">Registrarse</h2>
        <form className="formulario" onSubmit={handleSubmit}>            
            <div>
               <label>Nombre</label> 
               <input type="text" onChange={handleInputChange} name="nombre" value={values.nombre} />
            </div>
            <div>
               <label>Edad</label> 
               <input type="text" onChange={handleInputChange} name="edad" value={values.edad} />
            </div>
            <div>
               <label>Correo</label> 
               <input type="text" onChange={handleInputChange} name="correo" value={values.correo}/>
            </div>
            <div>
               <label>Password</label> 
               <input type="password" onChange={handleInputChange} name="password" value={values.password} />
            </div>
            <div>
               <label>Genero</label> 
               <input type="text" onChange={handleInputChange} name="genero" value={values.genero} />
            </div>
            <div>
               <label>Ubicación</label> 
               <input type="text" onChange={handleInputChange} name="ubicacion" value={values.ubicacion} />
            </div>

            <button>Registrarse</button>
        </form>
    </div>
  )
}

export default RegistroUser