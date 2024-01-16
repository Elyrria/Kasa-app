import "../styles/Carousel.scss"
import chevronLeft from "../assets/chevron-left.svg"
import chevronRight from "../assets/chevron-right.svg"
import { useState } from "react"

function Carousel({ pictures, title, id }) {
    console.log(pictures)
    console.log(pictures.length)
    const [slide, setSlide] = useState(0)

    const nextSlide = () => {
        setSlide(slide === pictures.length - 1 ? 0 : slide + 1)
    }
    const prevSlide = () => {
        setSlide(slide === 0 ? pictures.length - 1 : slide - 1)
    }

    return (
        <div className="carousel">
            <img
                onClick={nextSlide}
                className="carousel__chevron carousel__chevronRight"
                src={chevronLeft}
                alt=""
            />
            {pictures.map((picture, index) => (
                <img
                    key={`${id}-${index}`}
                    className={
                        slide === index
                            ? "carousel__slide"
                            : "carousel__slide--hidden"
                    }
                    src={picture}
                    alt={title}
                />
            ))}
            <img
                onClick={prevSlide}
                className="carousel__chevron carousel__chevronLeft"
                src={chevronRight}
                alt=""
            />
            <span className="carousel__indicator">{`${slide + 1}/${pictures.length}`}</span>
        </div>
    )
}

export default Carousel
