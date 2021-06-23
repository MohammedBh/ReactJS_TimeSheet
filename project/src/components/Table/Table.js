import React from "react"
import 'bootstrap/dist/js/bootstrap.min.js';
import "./Table.css"


let Table = (props) => {

    let tableTitles = [
        "project",
        "employé",
        "Durée",
        "Date début",
        "Date fin",
        "Description"
    ]

    console.log(props);
    
       let titles = []

       tableTitles.forEach(title => {
           console.log(title)
           titles.push(<li>{title}</li>);
       })

return(
<section >
    <div>
        <ul class="table">
            {titles}
        </ul>
    </div>
</section>
)
}


export default Table;

