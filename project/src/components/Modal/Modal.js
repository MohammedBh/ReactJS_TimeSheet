import React, { useState, useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, FormGroup, Input, Label } from "reactstrap"
import { useForm } from "react-hook-form";
import "./Modal.css"
import ProjectItem from "../ProjectItem/ProjectItem";



let MyModal = (props) => {

    let localProjects;

    let [projectList, setProjectList] = useState([]);

    //initiate state of modal
    const [isOpen, setIsOpen] = useState(false);

    const [deletedItems, setDeletedItems] = useState(0);

    // use form
    const { register, handleSubmit, unregister } = useForm();



    let checkLocalStorage = () => {
        if (localStorage.getItem("projects") !== null) {
            localProjects = localStorage.getItem("projects");
            projectList = JSON.parse(localProjects);
        }
    }

    checkLocalStorage();

    //function to push project into projectlist
    let addItemToList = (item) => {
        projectList.push(item);
        localStorage.setItem("projects", JSON.stringify(projectList));
    }

    let deleteItem = (item) => {
        let index = projectList.indexOf(item);
        projectList.splice(index, 1);
        setDeletedItems(deletedItems + 1);
        localStorage.setItem("projects", JSON.stringify(projectList));
    }

    //function to open modal
    let openModal = () => {
        setIsOpen(true);
    }

    //function to close modal
    let closeModal = () => {
        setIsOpen(false);
    }

    return (
        <div>
            <div class="buttonBorder text-center mb-5">
                <div>Deleted projects: {deletedItems}</div>
                <br />
                <button id="addProject" variant="primary" onClick={openModal}>
                    Add project
                </button>
            </div>
            <Modal isOpen={isOpen}>
                <form onSubmit={handleSubmit(addItemToList)}>
                    <ModalHeader>
                        Créer un nouveau projet
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label>Nom du project</Label>
                            <Input type="text" {...register("name")} />
                            <Input type="select" className="mt-3" {...register("employee")}>
                                <option value="">--Choisis un employé stp frangin--</option>
                                <option value="Mohamed">Mohamed</option>
                                <option value="Yassin">Yassin</option>
                                <option value="Issam">Issam</option>
                                <option value="Oussama">Oussama</option>
                            </Input>
                            <Label className="mt-3">Durée du projet (Heures)</Label>
                            <Input type="number" {...register("duration")}> </Input>
                            <Label className="mt-3">Date debut</Label>
                            <Input type="date" {...register("beginDate")}>jj-mm-yy</Input>
                            <Label className="mt-3">Date fin</Label>
                            <Input type="date" {...register("endDate")}>jj-mm-yy</Input>
                            <Label className="mt-3">Description</Label>
                            <Input type="textarea" {...register("description")}></Input>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button variante="primary" type="submit">Ajouter</Button>
                        <Button variant="secondary" onClick={() => {
                            closeModal();
                            unregister();
                        }}>
                            Fermer
                        </Button>
                    </ModalFooter>
                </form>
            </Modal>
            <div>
                {projectList.map((project) =>
                    <ProjectItem
                        onClick={() => { deleteItem(project) }}
                        key={Date.now}
                        name={project.name}
                        employee={project.employee}
                        duration={project.duration}
                        beginDate={project.beginDate}
                        endDate={project.endDate}
                        description={project.description}
                    />)
                }
            </div>
        </div>
    )

}
export default MyModal;