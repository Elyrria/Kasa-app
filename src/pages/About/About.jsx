import "../../styles/Home.scss"
import { useEffect } from "react"
import Banner from "../../components/Banner"

function About() {
    useEffect(() => {
        document.title = "À propos"
    }, [])

    return (
        <main>
            <Banner activeBanner={"active-about"} />
            <div>
                <h1>À propos</h1>
            </div>
        </main>
    )
}

export default About
