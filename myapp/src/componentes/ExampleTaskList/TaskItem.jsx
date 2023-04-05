import React from 'react';

const TaskItem = (props) => {
    return (
        <li>
            <p>{props.title}</p>
            <p>{props.description}</p>
        </li>
    )
}
export default TaskItem;
