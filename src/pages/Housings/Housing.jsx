import React, { useEffect } from "react"
import { useNavigate, useParams, useLocation } from "react-router-dom"
import dataHousings from "../../datas/housings.json"

function Housings() {
    const navigate = useNavigate()
    const location = useLocation()
    //Permet de récupérer la clé de la route enfant (tous ce qui est après hebergement/)
    const { id } = useParams()

    useEffect(() => {
        const isValid = isValidate(id)

        if (!isValid) {
            navigate("/error")
        }
    }, [id, location, navigate])

    return <div>Housings 🏠</div>
}

const isValidate = (id) => {
    //Récupération de tous les ids
    const idDataHousings = dataHousings.map((house) => house.id)
    //Vérification si id est bien compris dans le tableau des ids
    return idDataHousings.includes(id)
}

export default Housings
