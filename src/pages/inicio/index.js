import Banner from "components/Banner/Banner"
import Contenedor from "components/Contenedor"
import Footer from "components/footer"
import Header from "components/header"
import banner from "./Banner.png"

function Inicio(){
    return(
        <>
        <Header/>
        <Banner backgroundImage={banner}/>
        <Contenedor/>
        <Footer/>
        </>
        
          
    )
}

export default Inicio