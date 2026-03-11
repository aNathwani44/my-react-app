import { useState } from 'react'
import './About.css'

function About() {
    const [isVisible, setIsVisible] = useState(false)

    return (
        <div>
            <button id="about-button" onClick={() => setIsVisible(!isVisible)}>About</button>
            {isVisible && <p id="about-description">This is a simple React + Vite app developed by Anagh Nathwani for the "5.6 Final React App" project.</p>}
        </div>
    )
}

export default About