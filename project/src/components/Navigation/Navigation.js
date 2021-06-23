import React from "react"
import "../Navigation/Navigation.css"
import {Link} from "react-router-dom"

export default function Navigation(){
    let date = new Date()
    return(
        <nav>
            {/* <ul>
                <Link to="/Mohamed">
                    <li>Mohamed</li>
                </Link>
                <Link to="/Yassin">
                    <li>Yassin</li>
                </Link>
                <Link to="/Issam">
                    <li>Issam</li>
                </Link>
                <Link to="/Oussama">
                    <li>Oussama</li>
                </Link>
            </ul> */}
        </nav>
    )
} 
