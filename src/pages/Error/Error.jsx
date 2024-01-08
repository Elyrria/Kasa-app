import error from "../../assets/404.svg"
import { Link } from "react-router-dom"
import { useEffect } from "react"

function Error() {
    useEffect(() => {
        document.title = `404 🙈 Not found`
    }, [])

    return (
        <div>
            <img src={error} alt="Logo erreur 404" />
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/">Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default Error
