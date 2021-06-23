import React from "react"
import 'bootstrap/dist/js/bootstrap.min.js';
import "./ProjectItem.css"


let ProjectItem = (props) => {

return(
<div>
    {props.name}
    {props.employee}
    {props.duration}
    {props.beginDate}
    {props.endDate}
    {props.description}
    <button onClick={props.onClick}>delete</button>
</div>
)
}

export default ProjectItem;

  {/* {props.name}
    {props.employee}
    {props.duration}
    {props.beginDate}
    {props.endDate}
    {props.description} */}