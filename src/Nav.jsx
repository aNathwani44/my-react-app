import './Nav.css'
import { usestate } from 'react';

function Nav({ setpage }){
    return (
        <div>
            <ul>
                <li onClick={() => setpage("home")}></li>
                <li onClick={() => setpage("about")}></li>
                <li></li>
            </ul>
        </div>
    )
}