import './Card.css'
import { useState } from 'react'

function Card({name, description}) {

    const [count, setCount] = useState(0)

    if (count < 0) {
        setCount(0)
    }
    
    return (
        <div>
            <h2>{name}</h2>
            <p>Description: {description}</p>
            <button onClick={() => setCount(count + 1)}>Add {name} to your library</button>
            <button onClick={() => setCount(count - 1)}>Remove 1 {name} from library</button>

            <p>You have {count} {description} in your library.</p>
        </div>
    )


}

export default Card

// end of script