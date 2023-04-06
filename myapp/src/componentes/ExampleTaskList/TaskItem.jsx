import React from 'react';

const TaskItem = (props) => {
    return (
        <li>
            <h4>{props.title}</h4>
            <p>{props.description}</p>
        </li>
    )
}
export default TaskItem;
