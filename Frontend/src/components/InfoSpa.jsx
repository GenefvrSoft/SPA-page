import HeroSlider, {Slide} from 'hero-slider'

function InfoSpa() {

  const images = ['https://media.istockphoto.com/id/1325095289/es/foto/primer-plano-de-la-naturaleza-muerta-de-un-arreglo-de-spa-tranquilo.jpg?s=612x612&w=0&k=20&c=rUCCOMGJU42uQVJjFeTbPfNA9VKVl02nGKpVQlsWOtg=', 'https://www.flowww.es/hubfs/Q12023%20Marzo/Im%C3%A1genes%20blog/decoracion-negocios-wellness.webp', 'https://media.istockphoto.com/id/1325095289/es/foto/primer-plano-de-la-naturaleza-muerta-de-un-arreglo-de-spa-tranquilo.jpg?s=612x612&w=0&k=20&c=rUCCOMGJU42uQVJjFeTbPfNA9VKVl02nGKpVQlsWOtg='];

  return (
    <div className='Descripcion'>
      <h3 className='tituloSeccion'>Sobre Nosotros</h3>
      <div className='contenedor'>
        <div className='cardDetalles'>
            <h2 className='aboutInfoSpa'>Acerca de</h2>
            <p className="descripcionInfoSpa">En nuestro Spa le ofrecemos a nuestros huespedes y visitantes, instalaciones y servicios de primera,
              esperando que su estadía en nuestro centro termal sea para el disfrute pleno, la relajación y la salud.</p>
            <p>Queremos brindarle a cada huésped la oportunidad de vivir una experiencia única ajustada a sus necesidades individuales, a través de nuestros tratamientos y terapias, en un ambiente especialmente creado y pensado para la recuperación del equilibro natural de nuestro ser original, dentro de una concepción integral de salud, bienestar y descanso</p>
        </div>
        <div className="contentImagesi">
          <HeroSlider height={450} width={600} autoplay={true}>
            <Slide background={{backgroundImageSrc: images[0]}}/>
            <Slide background={{backgroundImageSrc: images[1]}}/>
            <Slide background={{backgroundImageSrc: images[2]}}/>
          </HeroSlider>
        </div>
      </div>
    </div>

  )
}

export default InfoSpa