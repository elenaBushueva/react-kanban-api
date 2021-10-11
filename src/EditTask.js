import React, {useState} from 'react';
import {Button, Input, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';


const EditTask = (props) => {

    const { card, priority } = props;

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const [taskNameInput, setTaskNameInput] = useState(card.name);
    const [taskDescriptionInput, setTaskDescriptionInput] = useState(card.description);
    const [taskPriorityInput, setTaskPriorityInput] = useState(card.priority);


    const onEdit = () => {
        props.editTask( card._id, {
            name: taskNameInput,
            description: taskDescriptionInput,
            priority: taskPriorityInput,
        });

        toggle();
    }

    return (
        <div>
            <div>
                <Button color="secondary" onClick={toggle}> Edit </Button>
                <Modal isOpen={modal} toggle={toggle}>
                    <ModalHeader > Edit Task</ModalHeader>
                    <ModalBody>
                        <b>Task name</b>
                        <Input placeholder="Task name" value={taskNameInput} onChange={(e)=>setTaskNameInput(e.target.value)}/>
                        <br/>
                        <b>Description</b>
                        <Input placeholder="Description" value={taskDescriptionInput} onChange={(e)=>setTaskDescriptionInput(e.target.value)}/>
                        <br/>
                        <b>Priority</b>
                        <select className="form-select" aria-label="Default select example" value={taskPriorityInput} onChange={(e)=>setTaskPriorityInput(e.target.value)}>
                            <option selected> {taskPriorityInput} </option>
                            {priority.map(el => <option key={el} value={el}> {el} </option>)}
                        </select>
                    </ModalBody>
                    <ModalFooter>
                        <Button disabled={ !taskNameInput || !taskDescriptionInput || !taskPriorityInput} color="secondary"
                                onClick={onEdit} > Update
                        </Button>{' '}
                        <Button color="light-gray" onClick={toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        </div>
    );
};

export default EditTask;