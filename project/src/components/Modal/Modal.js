import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, FormGroup, Input, Label } from "reactstrap"
import "./Modal.css"



export default class MyModal extends React.Component {
    state = {
        open: false
    }
    OpenModal = () => {
        this.setState({ open: !this.state.open })
    }
    render() {

        return (
            <>
                <Button variant="primary" onClick={this.OpenModal}>
                    Add project
                </Button>

                <Modal isOpen={this.state.open}>
                    <ModalHeader closeButton>
                        Créer un nouveau projet
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label>Nom du project</Label>
                            <Input type="text">Nom du projet</Input>
                            <Input type="select" className="mt-3">
                                <option value="">--Choisis un employé stp frangin--</option>
                                <option value="Mohamed">Mohamed</option>
                                <option value="Yassin">Yassin</option>
                                <option value="Issam">Issam</option>
                                <option value="Oussama">Oussama</option>
                            </Input>
                            <Label className="mt-3">Durée du projet (Heures)</Label>
                            <Input type="number"> </Input>
                            <Label className="mt-3">Date debut</Label>
                            <Input type="date">jj-mm-yy</Input>
                            <Label className="mt-3">Date fin</Label>
                            <Input type="date">jj-mm-yy</Input>
                            <Label className="mt-3">Description</Label>
                            <Input type="textarea"></Input>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button variante="primary">Ajouter</Button>
                        <Button variant="secondary" onClick={this.OpenModal}>
                            Fermer
                        </Button>

                    </ModalFooter>
                </Modal>
            </>
        )

    }

}

