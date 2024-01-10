import "../../styles/Home.scss"
import Banner from "../../components/Banner"

import { useEffect } from "react"

function Home() {
    useEffect(() => {
        document.title = "Home"
    }, [])

    return (
        <main>
            <Banner activeBanner={"active-home"} />
            <div>
                <h1>Home 🏠</h1>
            </div>
        </main>
    )
}

export default Home
