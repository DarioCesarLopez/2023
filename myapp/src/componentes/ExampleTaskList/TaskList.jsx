import React from 'react';

import TaskItem from './TaskItem';

const TaskList = () => {
    return (
        <div>
            <h4>Lista de tareas</h4>
            <ul>
                <TaskItem title ="Tarea 1" description = "descripcion de la tarea 1"/>
            </ul>

        </div>
    )
}

export default TaskList;