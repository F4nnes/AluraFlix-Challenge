
import styles from "./footer.module.css"
import logofooter from "./logofooter.png"

function Footer(){
    return(
        <footer className={styles.footer}>
            
                <section className={styles.logoContainer} >
                    <img src={logofooter} alt="AluraFlix" />


                </section>
        </footer>

    )

}

export default Footer