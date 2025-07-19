import { useState } from "react";

function AddTodo({updateList}){
    const [inputText,setInputText] = useState('');
    return (
        <div>
            <input 
                placeholder="Add your next todo..."
                type="text"
                value={inputText}
                onChange={e=> setInputText(e.target.value)}
            />
            <button onClick={()=>{
                updateList(inputText);
                setInputText('');
            }}>Add</button>
        </div>
    )
}

export default AddTodo;