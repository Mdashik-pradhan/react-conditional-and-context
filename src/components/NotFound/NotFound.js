import React from 'react';
import './NotFound.css';
import { useHistory } from 'react-router-dom';

const NotFound = () => {
    const history = useHistory();

    const handleBack = () => {
        history.push('/')
    }
    return(
        <div>
            <div className="text-center bg-dark vh-100 pt-5">
                <h2 className="text-danger">Your request has not found</h2>
                <h1>404</h1>
                <button onClick={handleBack} className="back-btn">Back</button> <button onClick={handleBack} className="back-btn bg-light ms-5">Home</button>
            </div>
        </div>
    )
}

export default NotFound;