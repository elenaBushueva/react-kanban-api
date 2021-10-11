import {useEffect, useState} from "react";
import axios from "axios";
import Column from "./Column";
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateTask from "./CreateTask";
import {logDOM} from "@testing-library/react";

function App() {

    const [statuses, setStatuses] = useState([]);
    const [cards, setCards] = useState([]);

    const priority = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    useEffect(() => {
        getColumns();
        getCards();
    }, []);

    const getColumns = () => {
        axios.get('http://nazarov-kanban-server.herokuapp.com/column')
            .then(res => setStatuses(res.data))
            .catch(err => console.log('Error'))
    };

    const getCards = () => {
        axios.get('http://nazarov-kanban-server.herokuapp.com/card')
            .then(res => setCards(res.data))
            .catch(err => console.log('Error'))
    }



    const changeStatus = (id, status, leftRight) => {
        const newStatus = statuses[statuses.map(el => el.title).indexOf(status) + leftRight].title;
        axios.put(`http://nazarov-kanban-server.herokuapp.com/card/${id}`, {status: newStatus})
            .then(res => getCards())
            .catch(err => console.log('Error'))
    }

    const changePriority = (id, pr, upDown) => {
        const newPriority = priority[priority.indexOf(pr) + upDown];
        axios.patch(`http://nazarov-kanban-server.herokuapp.com/card/${id}`, {priority: newPriority})
            .then(res => getCards())
            .catch(err => console.log('Error'))
    }

    const createTask = (task) => {
        axios.post('http://nazarov-kanban-server.herokuapp.com/card', task)
            .then(res => getCards())
            .catch(err => console.log('Error'))
    }

    const deleteTask = (id) => {
        axios.delete(`http://nazarov-kanban-server.herokuapp.com/card/${id}`)
            .then(res => getCards())
            .catch(err => console.log('Error'))
    }

    const editTask = (id, task) => {
        axios.patch(`http://nazarov-kanban-server.herokuapp.com/card/${id}`, task)
            .then(res => getCards())
            .catch(err => console.log('Error'))
    }


    return (
        <div className="container">
            <CreateTask
                priority={priority}
                createTask={createTask}
                statuses={statuses}
            />
            <br/>
            <div className="row align-items-start">

                {statuses.map(el => <Column
                    key={el._id}
                    status={el}
                    cards={cards}
                    changeStatus={changeStatus}
                    statuses={statuses}
                    deleteTask={deleteTask}
                    editTask={editTask}
                    priority={priority}
                    changePriority={changePriority}
                />)}

            </div>
        </div>
    );
}

export default App;
