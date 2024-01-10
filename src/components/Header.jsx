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
                    <NavLink
                        to="/"
                        //? Permet gràce au composant NavLink de pouvoir ajouter une classe active au link séléctionné
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        Accueil
                    </NavLink>
                    <NavLink
                        to="/A-Propos"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        A propos
                    </NavLink>
                </div>
            </nav>
        </header>
    )
}

export default Header
