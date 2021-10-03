import React, { useContext, useEffect } from 'react';
import { TodoContext } from '../../App';
import TodoList from '../TodoList/TodoList';
import './Main.css';

const Main = () => {

    const [toDos, setToDos, toDoItem, setToDoItem] = useContext(TodoContext)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => {
            setToDos(data)
            setToDoItem(data)
        }
            )
    }, [setToDoItem, setToDos])

    return (
        <div className="todo mt-5 pt-2 ">
            {
                toDoItem.map(todo => <TodoList key={todo.id} todo={todo} />)
            }
        </div>
    );
};

export default Main;