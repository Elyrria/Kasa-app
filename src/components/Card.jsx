import "../styles/Card.scss"

function Card({ cover, title }) {
    return (
        <div className="cards">
            <div className="cards__linearOppacity"></div>
            <img className="cards__img" src={cover} alt={title} />
            <h2 className="cards__titleCard">{title}</h2>
        </div>
    )
}
export default Card
