import "../../styles/Home.scss"
import { useEffect } from "react"

function About() {
    useEffect(() => {
        document.title = "À propos"
    }, [])

    return (
        <main>
            <div>
                <h1>À propos</h1>
            </div>
        </main>
    )
}

export default About
