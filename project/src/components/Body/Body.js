import React from "react"
import 'bootstrap/dist/js/bootstrap.min.js';
import "./Body.css"
import Navigation from "../Navigation/Navigation"
import Clock from "../clock/Clock";
import Table from "../Table/Table";
import MyModal from "../Modal/Modal";

let Body = (props) => {

    console.log(props);

    {
        return (
            <div>
                <Clock />
                <MyModal />
                <Table />
            </div>
        )
    }
}

export default Body;