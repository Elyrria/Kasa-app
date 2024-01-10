import "../styles/Banner.scss"

function Banner() {

    return (
        //? Ajouter une props pour modifier la class active-**-** (Permettra de modifier l'image en background en fontion )
        <div className="bannerWrapper active-home-1240">
            <div className="bannerWrapper--opacity"></div>
            <p className="bannerWrapper__para">
                Chez vous, partout et ailleurs
            </p>
        </div>
    )
}

export default Banner
