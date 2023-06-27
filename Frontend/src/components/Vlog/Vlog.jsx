import { useNavigate } from "react-router-dom"



function Vlog() {

    const navigate = useNavigate()

  return (
    <div className='PageVlog'>
        <h2 className='Titulo'>Vlog</h2>
        <div className="contenedorCards">
            <div className='card'>
                <h3>Recetas</h3>
                <img src="https://s1.eestatic.com/2015/06/10/cocinillas/cocinillas_40006005_116187702_1024x576.jpg" alt="" />
                <p>Haz click en <u>ver más detalles</u> para que te enteres de nuestras recetas</p>
                <button onClick={() => navigate('/recetas')}>Ver detalles</button>
            </div>
            <div className='card'>
                <h3>Salud</h3>
                <img src="https://i0.wp.com/www.ovsalud.org/wp-content/uploads/Personal-esencial-expuesto-al-Covid-19.jpg?resize=720%2C470&ssl=1" alt="" />
                <p>Haz click en <u>ver más detalles</u> para que te enteres de nuestros consejos de salud</p>
                <button onClick={() => navigate('/salud')}>Ver detalles</button>
            </div>
            <div className='card'>
                <h3>Belleza</h3>
                <img src="https://papelmatic.com/wp-content/uploads/2020/01/papelmatic-higiene-profesional-guia-higiene-centros-estetica-belleza.jpg" alt="" />
                <p>Haz click en <u>ver más detalles</u> para que te enteres de nuestros consejos de belleza</p>
                <button onClick={() => navigate('/belleza')}>Ver detalles</button>
            </div>
        </div>
    </div>
  )
}

export default Vlog;