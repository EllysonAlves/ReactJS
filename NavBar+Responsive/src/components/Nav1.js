import Styles from './Nav.module.css'
import Logo from '../logo.svg'

function Nav(){
    return(
        <nav className={Styles.Nav}>
            <img className={Styles.Img} src={Logo} alt="Logo" />
            <input type="text" placeholder="&#61442; busque aqui!" />
            <div className={Styles.Txt} >
                <a href="#0">Learn</a>
                <a href="#0">Look</a>
                <a href="#0">Press</a>
            </div>

            <div className={Styles.navegacao}>
                <div className={Styles.linhas}>
                    <div className={Styles.linha1} ></div>
                    <div className={Styles.linha2} ></div>
                    <div className={Styles.linha3} ></div>
                </div>
                <ul >
                    <li><a href="#0">Learn</a></li>
                    <li><a href="#0">Look</a></li>
                    <li><a href="#0">Press</a></li>
                </ul>
            </div>
            
            
        </nav>
    )
}

export default Nav