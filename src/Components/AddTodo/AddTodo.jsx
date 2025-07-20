import { useContext, useState } from "react";
import TodoDispatchContext from "../../Context/TodoDispatchContext";
import './AddTodo.css';
import Todo from "../Todo/Todo";

function AddTodo(){
    const [inputText,setInputText] = useState('');
    const {dispatch} = useContext(TodoDispatchContext);
    const handleDownKey = (e)=>{
        if(e.key === "Enter"){
            e.preventDefault();
            if(inputText.trim() !== ""){
                dispatch({type : 'add_todo',payload : {todoText : inputText}})
                setInputText('');
            }
        }
    }
    return (
        <div className="AddTodo">
            <input 
                className="mainInput"
                placeholder="Add your next todo..."
                type="text"
                value={inputText}
                onChange={e=> setInputText(e.target.value)}
                onKeyDown={handleDownKey}
            />
            <button className="Add" onClick={()=>{
                dispatch({type : 'add_todo',payload : {todoText : inputText}})
                setInputText('');
            }}>Add</button>
        </div>
    )
}

export default AddTodo;