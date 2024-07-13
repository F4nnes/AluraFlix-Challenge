import { Link} from "react-router-dom"
import styles from "./header.module.css"
import logo from "./logo.png"
import BotonHome from "components/BotonHome"
import BotonNuevoVideo from "components/BotonNuevoVideo"

function Header() {
    return (
        <header className={styles.header}>

            <Link to="/">
            
                <nav className={styles.container} >

                    <div classname={styles.logo}  >
                        <img src={logo} alt="AluraFlix" />
                    </div>
                    
                    <div className={styles.navBotones}>
                        <BotonHome />
                        <BotonNuevoVideo />
                    </div>

                </nav>

            </Link>

        </header>

    )

}

export default Header