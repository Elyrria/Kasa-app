import chevron from "../assets/chevron.svg"
function ButtonCollapse({ name, isActivate, setIsActivate }) {
    //! Fonction qui permettra au clic de changer l'état de isActivate
    const toggleCollapse = () => {
        setIsActivate(!isActivate)
    }
    return (
        <button type="button" className="collapsible" onClick={toggleCollapse}>
            {name}
            <img
                className="collapsible__image"
                src={chevron}
                alt="Chevron fermant ou ouvrant"
                aria-hidden="true"
            />
        </button>
    )
}

export default ButtonCollapse
