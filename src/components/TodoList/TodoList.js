import React from 'react';
import { useHistory } from 'react-router-dom';
import './TodoList.css'

const TodoList = (props) => {
    const { id, title, completed, userId } = props.todo;
    const history = useHistory();

    const handleDetails = (id) => {
        history.push(`/details/${id}`)
    }
    
    return (
        <div className="">
            <div onClick={() => handleDetails(id)} className="todoItem d-flex justify-content-between align-items-center">
                <h6>user: {userId}</h6>
                <h6>{title}</h6>
                <div className={completed ? 'completed' : 'uncompleted' }>
                    {
                        completed ? <h6>Completed</h6> : <h6>Uncompleted</h6>
                    }
                </div>
            </div>
        </div>
    );
};

export default TodoList;