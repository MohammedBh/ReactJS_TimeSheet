import React from "react"
import 'bootstrap/dist/js/bootstrap.min.js';
import "./Body.css"
import Navigation from "../Navigation/Navigation"
import MyModal from "../Modal/Modal";

export default class Body extends React.Component {

    render() {
        let d = new Date()
        var hours = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
        let date = d.getDate() + '-' + (d.getMonth() + 1) + '-' + d.getFullYear();
        return (
            <div>

                <section class="section1">
                    <div>
                        <h3>Date : {date + " " + hours}</h3>
                    </div>
                    <MyModal></MyModal>
                </section>

                <section >
                    <div>
                        <ul class="table">
                            <li>Project</li>
                            <li>Employé</li>
                            <li>Tâche</li>
                            <li>Durée</li>
                            <li>Description</li>
                        </ul>
                    </div>
                </section>
            </div>

        )
    }
}