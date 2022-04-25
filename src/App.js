import React from "react"
import About from '../src/Components/About.jsx'
import Footer from '../src/Components/Footer.jsx'
import Info from '../src/Components/Info.jsx'
import Interests from '../src/Components/Interests.jsx'

export default function App() {
    return (
      <div className="card">  
        <Info/>
        <About/>
        <Interests/>
        <Footer/>
      </div>  
    )
}