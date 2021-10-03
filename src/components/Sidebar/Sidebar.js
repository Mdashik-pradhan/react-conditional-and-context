import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'

const Sidebar = (props) => {
    const {setShowSidebar} = props
    return (
        <div className="sidebar-container mt-5">
            <div className="sidebar">
                <div className="sidebarClose">
                    <i onClick={() => setShowSidebar(false)} className="fas fa-window-close"></i>
                </div>
                
                    <div className="navItem">
                        <li>
                            <Link to="/main">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/user">User</Link>
                        </li>
                    </div>
            </div>
        </div>
    );
};

export default Sidebar;