import React from "react"
import 'bootstrap/dist/js/bootstrap.min.js';
import "./Body.css"
import Navigation  from "../Navigation/Navigation"
import MyModal from "../Modal/Modal";

export default class Body extends React.Component {
    
    render() {
        let d = new Date()
        var hours = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
        let date = d.getDate()+'-'+(d.getMonth()+1)+'-'+d.getFullYear();
        return (
        <div>
            <section class="section1">
            <h3>Date : {date + " " + hours}</h3>
            <MyModal></MyModal>
            <div>
            </div>
        </section>
        <section >
            <div>
                <ul class="table">
                    <li>Project</li>
                    <li>Employe</li>
                    <li>Task</li>
                    <li>Durée</li>
                    <li>Description</li>
                </ul>
            </div>
        </section>
        </div>

        )
    }
}