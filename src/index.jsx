import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./styles/index.scss"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Error from "./pages/Error/Error"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/A-Propos" element={<About />} />

                <Route path="/*" element={<Error />} />
            </Routes>
            <Footer />
        </Router>
    </React.StrictMode>
)
