import "../styles/Card.scss"
import { Link } from "react-router-dom"

function Card({ cover, title }) {
    return (
        <div className="cards">
            <Link
                className="cards__links"
                to={`/hebergement/${encodeURIComponent(
                    title.split(" ").join("-")
                )}`}
            >
                <div className="cards__linearOppacity"></div>
                <img className="cards__img" src={cover} alt={title} />
                <h2 className="cards__titleCard">{title}</h2>
            </Link>
        </div>
    )
}
export default Card
