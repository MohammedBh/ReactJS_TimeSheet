import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, FormGroup, Input, Label } from "reactstrap"
import { useForm } from "react-hook-form";
import "./Modal.css"
import ProjectItem from "../ProjectItem/ProjectItem";

let MyModal = (props) => {

    
    let fetchedData = [];
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };


    const [isOpen, setIsOpen] = useState(false);

    let openModal = () => {
        setIsOpen(true);
    }

    let closeModal = () => {
        setIsOpen(false);
    }

        return (
       
        <div>
        <Button variant="primary" onClick={openModal}>
            Add project
        </Button>
         <Modal isOpen={isOpen}> 
        <form onSubmit={handleSubmit(onSubmit)}>
        <ModalHeader closeButton>
            Créer un nouveau projet
        </ModalHeader>
            <ModalBody>
                        <FormGroup>
                            <Label>Nom du project</Label>
                            <Input type="text" {...register("projectName")} />
                            <Input type="select" className="mt-3" {...register("employee")}>
                                <option value="">--Choisis un employé stp frangin--</option>
                                <option value="Mohamed">Mohamed</option>
                                <option value="Yassin">Yassin</option>
                                <option value="Issam">Issam</option>
                                <option value="Oussama">Oussama</option>
                            </Input>
                            <Label className="mt-3">Durée du projet (Heures)</Label>
                            <Input type="number" {...register("projectDuration")}> </Input>
                            <Label className="mt-3">Date debut</Label>
                            <Input type="date" {...register("projectStartDate")}>jj-mm-yy</Input>
                            <Label className="mt-3">Date fin</Label>
                            <Input type="date" {...register("projectEndDate")}>jj-mm-yy</Input>
                            <Label className="mt-3">Description</Label>
                            <Input type="textarea" {...register("projectDescription")}></Input>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button variante="primary" type="submit">Ajouter</Button>
                        <Button variant="secondary" onClick={closeModal}>
                            Fermer
                        </Button>
                    </ModalFooter>
        </form>
        </Modal>
        <div>
            <ProjectItem name="test123"/>
        </div>
        </div>
       

        )

}
export default MyModal;

