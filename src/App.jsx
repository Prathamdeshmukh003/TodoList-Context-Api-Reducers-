import { useState } from "react";
import "./App.css";
import AddTodo from "./Components/AddTodo/AddTodo";
import TodoList from "./Components/Todo-List/Todo-List";
import TodoContext from "./Context/TodoContext";

function App() {
  const [list, setList] = useState([
    { id: 1, todoData: "todo 1", finished: false },
    { id: 2, todoData: "todo 2", finished: true },
  ]);
  return (
    <TodoContext.Provider value={{list,setList}}>
      <h1>Todo App</h1>
      <AddTodo
        updateList={(todo) =>
          setList([
            ...list,
            { id: list.length + 1, todoData: todo, finished: false },
          ])
        }
      />
      <TodoList />
    </TodoContext.Provider>
  );
}

export default App;
