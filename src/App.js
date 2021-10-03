import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { createContext, useState} from "react";

export const TodoContext = createContext('todo')

function App() {
  const [toDos, setToDos] = useState([]);
  const [toDoItem, setToDoItem] = useState([]);
  return (
    <TodoContext.Provider value={[toDos, setToDos, toDoItem, setToDoItem]} >
      <Router>
            <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
      </Router>
    </TodoContext.Provider>
  );
}

export default App;
