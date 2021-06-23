import React from "react"
import 'bootstrap/dist/js/bootstrap.min.js';
import "./Clock.css"


let Clock = (props) => {

    let d = new Date()
    var hours = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    let date = d.getDate() + '-' + (d.getMonth() + 1) + '-' + d.getFullYear();

return(
    <section class="section1">
        <div>
            <h3>Date : {date + " " + hours}</h3>
        </div>
    </section>
);
}

export default Clock;