import React, {useState} from 'react';
import {Button, Modal, ModalBody, ModalFooter} from 'reactstrap';

const DeleteTask = (props) => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const onDelete = () => {
        props.deleteTask(props.card._id)
    }

    return (
        <div>
            <Button color="danger" onClick={toggle}>delete</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalBody>Are you sure you want to delete  <b>{props.card.name}</b> ?</ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={onDelete}>Delete</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default DeleteTask;