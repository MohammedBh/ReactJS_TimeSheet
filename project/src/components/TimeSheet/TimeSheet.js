import React from "react"
import 'bootstrap/dist/js/bootstrap.min.js';
import "./TimeSheet.css";
import Body from "../Body/Body";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";



let TimeSheet = (props) => {

return(
    <div>
        <Header/>
        <Body />
        <Footer/>
    </div>
)
}


export default TimeSheet;

