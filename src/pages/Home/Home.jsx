import "../../styles/Home.scss"
import Banner from "../../components/Banner"

import { useEffect } from "react"

function Home() {
    useEffect(() => {
        document.title = "Home"
    }, [])

    return (
        <main>
            <Banner />
            <div>
                <h1>Home 🏠</h1>
            </div>
        </main>
    )
}

export default Home
