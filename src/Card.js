import React from 'react';
import DeleteTask from "./DeleteTask";
import EditDelete from "./EditDelete";
import EditTask from "./EditTask";

const Card = (props) => {

    const {statuses, card} = props;

    const disabledLeft = statuses[0].title === props.card.status;
    const disabledRight = statuses[statuses.length - 1].title === props.card.status;


    return (
        <div className="card">
            <div className="card-body">

                <EditDelete deleteTask={props.deleteTask}
                            cardId={card._id}
                            cardName={card.name}
                />

                <h5 className="card-title">{card.name}</h5>
                <p className="card-text">{card.description}</p>
                <p className="card-text">priority : {card.priority}</p>

                <button disabled={disabledLeft} onClick={() => props.changeStatus(card._id, card.status, -1)}> ❮
                </button>
                <button disabled={card.priority === 10} onClick={() => props.changePriority(card._id, card.priority, +1)} > ˄</button>
                <button disabled={card.priority === 1} onClick={() => props.changePriority(card._id, card.priority, -1)}> ˅</button>
                <button disabled={disabledRight} onClick={() => props.changeStatus(card._id, card.status, +1)}> ❯
                </button>

                <br/><br/>

                <EditTask
                    editTask={props.editTask}
                    card={card}
                    priority={props.priority}
                />

                <DeleteTask
                    deleteTask={props.deleteTask}
                    card={card}
                />
            </div>
        </div>
    );
};

export default Card;