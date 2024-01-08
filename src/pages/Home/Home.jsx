import logo from "../../assets/logo-red.svg"
import "../../styles/Home.css"
import Banner from "../../components/Banner"

import { useEffect } from "react"

function Home() {
    useEffect(() => {
        document.title = "Home"
    }, [])

    return (
        <div className="App">
            <Banner />
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </div>
        </div>
    )
}

export default Home
