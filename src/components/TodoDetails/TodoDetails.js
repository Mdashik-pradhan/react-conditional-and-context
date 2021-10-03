import React,{ useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import './TodoDetails.css';

const TodoDetails = () => {
    const [todoDetails, setTodoDetails] = useState([]);
    const { id } = useParams();
    const history = useHistory();
    const {userId, title, completed} = todoDetails;
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(res => res.json())
        .then(data => setTodoDetails(data))
    }, [id])
    const handleBack = () => {
        history.push('/main')
    }
    return (
        <div className="d-flex justify-content-center mt-5 pt-3">
            <div className="details text-center">
                <h3>{userId}</h3>
                <h3>{title}</h3>
                <div className={completed? 'completed' : 'uncompleted'}>
                    {
                        completed? <h6>Completed</h6> : <h6>Uncompleted</h6>
                    }
                </div>
                <button onClick={handleBack} className="back-btn">Back</button>
            </div>
                
        </div>
    )
}

export default TodoDetails;