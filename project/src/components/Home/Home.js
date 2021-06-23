import React from "react"
import 'bootstrap/dist/js/bootstrap.min.js';
import "./Home.css"
import { Link } from 'react-router-dom'


let Home = (props) => {

    return (
        <div id="bodyHome" class="align-items-center">
            <div class="text-center">
                WORK LIST
            </div>
            <div class="d-flex mt-5 border-0 justify-content-center">
                <Link key={1} className="link" to="/timesheet">
                    <button class="buttonHome">START JOURNEY</button>
                </Link>
            </div>
        </div>

    )
}


export default Home;

