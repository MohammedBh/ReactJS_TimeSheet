import React from "react"
import 'bootstrap/dist/js/bootstrap.min.js';
import "./ProjectItem.css"


let ProjectItem = (props) => {

return(
<div>
    <ul className="tableAjoute">
      <li>{props.name}</li>
      <li>{props.employee}</li>
      <li>{props.duration}</li>
      <li>{props.beginDate}</li>
      <li>{props.endDate}</li>
      <li>{props.description}</li>
      <button onClick={props.onClick}>delete</button>
    </ul>
    
</div>
)
}

export default ProjectItem;

