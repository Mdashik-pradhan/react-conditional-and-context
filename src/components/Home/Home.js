import React, { useState } from 'react';
import About from '../About/About';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import TodoDetails from '../TodoDetails/TodoDetails';
import NotFound from '../NotFound/NotFound';
import './Home.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import User from '../User/User';

const Home = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    
    return (
        <div className="vh-100">
            <Header setShowSidebar={setShowSidebar}/>
            <Router>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="">
                        {
                            showSidebar ? <Sidebar setShowSidebar={setShowSidebar} /> : ''
                        }
                    </div>
                    <div className = "w-100" >
                            <Switch>
                            <Route exact path="/">
                                <Main/>
                            </Route>
                            <Route path="/main">
                                <Main />
                            </Route>
                            <Route path="/about">
                                <About />
                            </Route>
                            <Route path="/user">
                                <User />
                            </Route>
                            <Route path="/details/:id">
                                <TodoDetails />
                            </Route>
                            </Switch>
                    </div>
                </div>
            </Router>
        </div>
    );
};

export default Home;