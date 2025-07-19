import { useState } from "react";
import './Todo.css';

function Todo({ todoData, isFinished, changeFinished ,onDelete,onEdit}) {
  const [finished, setFinished] = useState(isFinished);
  const [isEditing,setIsEditing] = useState(false);
  const [editText,setEditText] = useState(todoData);
  return (
    <div className="List">
      <input
        className="Check_Input"
        type="checkbox"
        checked={finished}
        onChange={(e) => {
            setFinished(e.target.checked);
            changeFinished(e.target.checked);
        }}
      />
      {(isEditing) ? <input className="edt_text" type="text" value={editText} onChange={(e)=>setEditText(e.target.value)}/> :<span>{todoData}</span>}
      <button className="edt-btn" onClick={()=>{
        setIsEditing(!isEditing);
        onEdit(editText);
      }}>{(!isEditing) ? 'Edit' : 'Save'}</button>
      <button className="del-btn" onClick={onDelete}>Delete</button>
    </div>
  );
}

export default Todo;
