import BannerAboutDesktop from "../assets/banner-about-1240.webp"
import BannerAboutMobile from "../assets/banner-about-320.webp"
import BannerhomeDesktop from "../assets/banner-home-1240.webp"
import BannerhomeMobile from "../assets/banner-home-320.webp"

function Banner() {
    const sizeBanner = [1240, 320]

    return (
        <div className="bannerWrapper">
            <img
                src={BannerAboutDesktop}
                srcSet={`${BannerAboutDesktop} ${sizeBanner[0]}w, ${BannerAboutMobile} ${sizeBanner[1]}w, `}
                sizes={`(min-width: 200px) 100vw, ${sizeBanner[0]}`}
                alt="Photographie de falaises avec la mer"
            />
            <p>Chez vous, partout et ailleurs</p>
        </div>
    )
}

// Ne réaliser qu'une seul banner et ajout de la div avec le paragraphe que si la page home et active

// Si la props Home est présent affiche la banner comme suit => sinon comme suit =>

export default Banner
