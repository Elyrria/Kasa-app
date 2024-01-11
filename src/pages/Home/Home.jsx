import "../../styles/Home.scss"
import Banner from "../../components/Banner"
import dataHousings from "../../datas/housings.json"
import Card from "../../components/Card"

import { useEffect } from "react"

function Home() {
    useEffect(() => {
        document.title = "Home"
    }, [])

    return (
        <main>
            <Banner activeBanner={"active-home"} />
            <div className="wrapperGallery">
                {dataHousings.map((housings) => (
                    <Card
                        key={housings.id}
                        cover={housings.cover}
                        title={housings.title}
                    />
                ))}
            </div>
        </main>
    )
}

export default Home
