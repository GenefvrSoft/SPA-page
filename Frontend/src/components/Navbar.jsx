import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate()
  const isLogged = localStorage.getItem('token');

  const onHandleSession = () => {
    if(isLogged) {
      localStorage.removeItem('token');
      localStorage.removeItem('cuenta');
      location.href = '/';
    }else {
      navigate('/sesion')
    }
  }

  return (
    <div className="navbar">
        <h2 className="titulopagina">Beauty Salon</h2>

        <ul className="listanav">
            <li><Link to='/'>INICIO</Link></li>
            <li><a href='#servicios'>RESERVAR</a></li>
            <li><a href="#resenas">RESENA</a></li>
            <li><Link to='/vlog'>VLOG</Link></li>
            <li style={{cursor: 'pointer'}} onClick={onHandleSession}>{isLogged ? 'CERRAR SESION' : 'INICIAR SESION'}</li>
            <li><Link to='/registro'>REGISTRO</Link></li>
        </ul>
    </div>
  )
}

export default Navbar