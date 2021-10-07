import React from 'react';

const Card = (props) => {

    const {statuses} = props;

    const disabledLeft = statuses[0].title === props.card.status;
    const disabledRight = statuses[statuses.length - 1].title === props.card.status;


    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.card.name}</h5>
                <p className="card-text">{props.card.description}</p>

                <button disabled={disabledLeft} onClick={() => props.changeStatus(props.card._id, props.card.status, -1)}> ❮</button>
                <button> ˄</button>
                <button> ˅</button>
                <button disabled={ disabledRight } onClick={() => props.changeStatus(props.card._id, props.card.status, +1)} > ❯ </button>

            </div>
        </div>
    );
};

export default Card;