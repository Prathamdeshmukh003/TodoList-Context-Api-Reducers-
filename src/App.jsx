import { useReducer } from "react";
import "./App.css";
import AddTodo from "./Components/AddTodo/AddTodo";
import TodoList from "./Components/Todo-List/Todo-List";
import TodoContext from "./Context/TodoContext";
import TodoReducers from "./Reducers/TodoReducers";
import TodoDispatchContext from "./Context/TodoDispatchContext";

function App() {
  // const [list, setList] = useState([
  //   { id: 1, todoData: "todo 1", finished: false },
  //   { id: 2, todoData: "todo 2", finished: true },
  // ]);
  const [list, dispatch] = useReducer(TodoReducers, []);
  return (
    <TodoContext.Provider value={{ list }}>
      <TodoDispatchContext.Provider value={{dispatch}}>
      <div className="main">
        <h1>Todo App</h1>
        <AddTodo />
        <TodoList />
      </div>
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
}

export default App;
