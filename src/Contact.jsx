import { useState } from 'react'
import './Contact.css'

function Contact() {
    const [isVisibleClone, setIsVisible] = useState(false)

    return (
        <div>
            <button id="contact-button" onClick={() => setIsVisible(!isVisibleClone)}>Contact</button>
            {isVisibleClone && <p id="contact-description">Feel free to reach out to Anagh Nathwani at anaghnathwani@gmail.com</p>}
        </div>
    )
}

export default Contact