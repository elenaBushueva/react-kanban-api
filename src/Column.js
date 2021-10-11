import React from 'react';
import Card from "./Card";


const Column = (props) => {

    const {status} = props;

    const colorMap = {
        todo: "border-danger",
        progress: "border-info",
        review: "border-warning",
        done: "border-success",
    }


    return (
        <div className="col">
            <h5 className={`border-bottom border-5 ${colorMap[status.title]}`}>
                {status.title[0].toUpperCase() + status.title.slice(1).toLowerCase()}
            </h5>

            {props.cards
                .filter(el => el.status === status.title)
                .sort((a, b) => a.priority - b.priority)
                .map(el =>
                    <Card
                        key={el._id}
                        card={el}
                        changeStatus={props.changeStatus}
                        statuses={props.statuses}
                        deleteTask={props.deleteTask}
                        editTask={props.editTask}
                        priority={props.priority}
                        changePriority={props.changePriority}
                    />)}
        </div>
    );
};

export default Column;