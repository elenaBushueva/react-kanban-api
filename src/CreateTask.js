import React, {useState} from 'react';
import {Button, Input, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';


const CreateTask = (props) => {

const [modal, setModal] = useState(false);
const toggle = () => setModal(!modal);

const [taskNameInput, setTaskNameInput] = useState('');
const [taskDescriptionInput, setTaskDescriptionInput] = useState('');
const [taskPriorityInput, setTaskPriorityInput] = useState('');

const onCreate = () => {

    props.createTask({
        name: taskNameInput,
        description: taskDescriptionInput,
        priority: taskPriorityInput,
        status: props.statuses[0].title
    });
    toggle();
    setTaskNameInput('')
    setTaskDescriptionInput('')
    setTaskPriorityInput('')
}

    return (
        <div>
            <div>
                <Button color="secondary" onClick={toggle}>Create Task</Button>
                <Modal isOpen={modal} toggle={toggle}>
                    <ModalHeader >Create Task</ModalHeader>
                    <ModalBody>
                        <Input placeholder="Task name" value={taskNameInput} onChange={(e)=>setTaskNameInput(e.target.value)}/>
                        <br/>
                        <Input placeholder="Description" value={taskDescriptionInput} onChange={(e)=>setTaskDescriptionInput(e.target.value)}/>
                        <br/>
                        <select className="form-select" aria-label="Default select example" value={taskPriorityInput} onChange={(e)=>setTaskPriorityInput(e.target.value)}>
                            <option selected>Priority</option>
                            {props.priority.map(el => <option key={el} value={el}>{el}</option>)}
                        </select>
                    </ModalBody>
                    <ModalFooter>
                        <Button disabled={ !taskNameInput || !taskDescriptionInput || !taskPriorityInput} color="secondary" onClick={onCreate} >Create</Button>{' '}
                        <Button color="light-gray" onClick={toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        </div>
    );
};

export default CreateTask;