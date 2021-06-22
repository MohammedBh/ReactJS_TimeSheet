import React from 'react';
import './Modal.css';
import 'bootstrap/dist/css/bootstrap.min.css';
class Modal extends React.Component {

    render() {
        
        return (
            <div>
                <section>
                    <div id="divButtonAdd" class="" onClick="createAddButton()">
                        <button id="addTask" class="border-0 py-2 px-3 bg-primary text-white mx-5 my-3">Ajouter</button>
                    </div>
                </section>
                <section>
                    <div id="closemodalButton">
                        <i class="far fa-window-close"></i>
                    </div>
                    <div id="modalDiv" class="text-center p-5">
                        <select name="members" id="members-select">
                            <option value=""></option>
                            <option value="mohammed">Mohammed</option>
                            <option value="issam">Issam</option>
                            <option value="yassin">Yassin</option>
                            <option value="oussama">Oussama</option>
                        </select>
                        <br />
                        <h4 class="mt-3">Tâche</h4>
                        <input type="text" name="" id="" />
                        <br />
                        <p class="mt-5">Lorem ipsum dolor sit amet.</p>
                        <br />
                        <button>Ajouter</button>
                    </div>
                    <div id="overlayModal"></div>
                </section>
            </div>
        )
    }
}

export default Modal;