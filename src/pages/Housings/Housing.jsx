import React, { useEffect } from "react"
import { useNavigate, useParams, useLocation } from "react-router-dom"
import dataHousings from "../../datas/housings.json"
import Carousel from "../../components/Carousel"

function Housings() {
    const navigate = useNavigate()
    const location = useLocation()
    //Permet de récupérer la clé de la route enfant (tous ce qui est après hebergement/)
    const { id } = useParams()
    const housingData = getDatabyId(id, navigate)

    useEffect(() => {
        const isValid = isValidate(id)

        if (!isValid) {
            navigate("/error")
        }
    }, [id, location, navigate])

    return (
        <div>
            <Carousel
                pictures={housingData.pictures}
                title={housingData.title}
                id={housingData.id}
            />
        </div>
    )
}

const isValidate = (id) => {
    //Récupération de tous les ids
    const idDataHousings = dataHousings.map((house) => house.id)
    //Vérification si id est bien compris dans le tableau des ids
    return idDataHousings.includes(id)
}

const getDatabyId = (id, navigate) => {
    const foundData = dataHousings.find((item) => item.id === id)

    if (foundData) {
        return foundData
    } else {
        return navigate("/error")
    }
}

export default Housings
