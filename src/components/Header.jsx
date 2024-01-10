import logo from "../assets/logo-red-kasa.svg"
import { NavLink } from "react-router-dom"
import "../styles/Header.scss"

function Header() {
    return (
        <header className="header">
            <nav className="header__nav">
                <h1>
                    <img src={logo} alt="Kasa" />
                </h1>
                <div className="nav__links">
                    <NavLink to="/">Accueil</NavLink>
                    <NavLink to="/A-Propos">A propos</NavLink>
                </div>
            </nav>
        </header>
    )
}

export default Header
