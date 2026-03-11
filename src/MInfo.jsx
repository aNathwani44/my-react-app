import { useState } from 'react'
import './MInfo.css'

function MInfo() {
    const [isVisible, setIsVisible] = useState(false)

    return (
        <div>
            <button id="minfo-button" onClick={() => setIsVisible(!isVisible)}>More information</button>
            {isVisible && <p id="minfo-description">This site was created using a modular coding system that included a publish to github pages, multiple JSX files, and a whole lot of CSS. </p>}
        </div>
    )
}

export default MInfo