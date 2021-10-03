import React, { useContext } from 'react';
import { TodoContext } from '../../App';
import './Header.css';

const Header = (props) => {
 const [toDos, setToDoItem] = useContext(TodoContext)
  const handleSearch = (e) => {
    const searchText = e.target.value;
    const matchItem = toDos.filter(todo => todo.title.toLowerCase().includes(searchText.toLowerCase()))
    setToDoItem(matchItem)
    console.log(matchItem, 'match')
  }
  const { setShowSidebar } = props;
    return (
      <div className="header fixed-top bg-dark">
        <div className="container pt-2 pb-2 text-light">
          <div className="d-flex justify-content-between">
            <i onClick={() => setShowSidebar(true)} className="fas fa-bars"></i>
            <input onChange={handleSearch} type="text" placeholder="Search..." />
            <button>Login</button>
          </div>
        </div>
      </div>
    );
};

export default Header;