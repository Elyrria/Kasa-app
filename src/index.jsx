import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./styles/index.css"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Header from "./components/Header"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/A-Propos" element={<About />} />
            </Routes>
        </Router>
    </React.StrictMode>
)
