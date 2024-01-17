import "../styles/Carousel.scss"
import chevronLeft from "../assets/chevron-left.svg"
import chevronRight from "../assets/chevron-right.svg"
import { useState } from "react"

function Carousel({ pictures, title, id }) {
    const [slide, setSlide] = useState(0)

    const nextSlide = () => {
        setSlide(slide === pictures.length - 1 ? 0 : slide + 1)
    }
    const prevSlide = () => {
        setSlide(slide === 0 ? pictures.length - 1 : slide - 1)
    }

    return (
        <div className="carouselContainer">
            <div className="carouselContainer__carousel">
                <img
                    onClick={nextSlide}
                    className={
                        pictures.length <= 1
                            ? "hidden"
                            : "carousel__chevron carousel__chevronRight"
                    }
                    src={chevronLeft}
                    alt=""
                />
                {pictures.map((picture, index) => (
                    <img
                        key={`${id}-${index}`}
                        className={
                            slide === index
                                ? "carousel__slide"
                                : "hidden"
                        }
                        src={picture}
                        alt={title}
                    />
                ))}
                <img
                    onClick={prevSlide}
                    className={
                        pictures.length <= 1
                            ? "hidden"
                            : "carousel__chevron carousel__chevronLeft"
                    }
                    src={chevronRight}
                    alt=""
                />
                <span
                    className={
                        pictures.length <= 1 ? "hidden" : "carousel__indicator"
                    }
                >{`${slide + 1}/${pictures.length}`}</span>
            </div>
        </div>
    )
}

export default Carousel
