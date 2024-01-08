import logo from "../assets/logo-red.svg"
import { Link } from "react-router-dom"
function Header() {
    return (
        <header>
            <nav>
                <img src={logo} alt="logo Kasa" />
                <Link to="/">Accueil</Link>
                <Link to="/A-Propos">A propos</Link>
            </nav>
        </header>
    )
}

export default Header
