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
            <button onClick={() => setCount(count - 1)}>Remove 1 {description} from library</button>
            <p id="lib-count">{description} in library: {count}</p>
        </div>
    )


}
    



export default Card