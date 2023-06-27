import Banner from "./Banner"
import Footer from "./Footer"
import InfoSpa from "./InfoSpa"
import Reseña from "./Reseña"
import Servicios from "./Servicios"


function HomePage() {
  return (
    <div>
        <Banner />
        <InfoSpa />
        <Servicios />
        <Reseña />
        <Footer />
    </div>
  )
}

export default HomePage