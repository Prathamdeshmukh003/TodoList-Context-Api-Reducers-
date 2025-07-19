import { useContext, useState } from "react";
import TodoDispatchContext from "../../Context/TodoDispatchContext";
import './AddTodo.css';

function AddTodo(){
    const [inputText,setInputText] = useState('');
    const {dispatch} = useContext(TodoDispatchContext);
    return (
        <div className="AddTodo">
            <input 
                className="mainInput"
                placeholder="Add your next todo..."
                type="text"
                value={inputText}
                onChange={e=> setInputText(e.target.value)}
            />
            <button className="Add" onClick={()=>{
                dispatch({type : 'add_todo',payload : {todoText : inputText}})
                setInputText('');
            }}>Add</button>
        </div>
    )
}

export default AddTodo;