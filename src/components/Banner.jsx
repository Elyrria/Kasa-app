import "../styles/Banner.scss"

function Banner({ activeBanner }) {
    console.log(activeBanner)
    return (
        //? Ajouter une props pour modifier la class active-**-** (Permettra de modifier l'image en background en fontion )
        <div className={`bannerWrapper ${activeBanner}`}>
            <div className="bannerWrapper--opacity"></div>

            {activeBanner === "active-home" && (
                <p className="bannerWrapper__para">
                    Chez vous, partout et ailleurs
                </p>
            )}
        </div>
    )
}

export default Banner
