import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodosAsync, updateTodosAsync, todosSelector, setInputText, toggleIsUpdate, setUpdateData, clearStatus } 
from "../redux/reducers/todoReducer";
// for toast notifications
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// material UIs
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

const Input = () => {
  const dispatch = useDispatch();
  const { inpText, isUpdate, updateData } = useSelector(todosSelector);
  const [isClicked, setIsClicked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isUpdate) {
      dispatch(updateTodosAsync({...updateData, title: inpText}));
      dispatch(toggleIsUpdate(false));
      dispatch(setUpdateData(null));
      toast.success('Updated Todo Successfully.');
    } else {
      dispatch(addTodosAsync({ id: Math.floor(Math.random()*10000) , title: inpText, isCompleted: false }));
      toast.success('Added new Todo Successfully.');
    }
    dispatch(setInputText(""));
    dispatch(clearStatus());
  };

  const handleChange = (event)=>{
    dispatch(setInputText(event.target.value));
  }

  const handleClick = () => {
    setIsClicked(true);
  }

  return (
    <>
    <div>
      <form className="create-todo" onSubmit={handleSubmit}>
        <input
          name="todo"
          onChange={handleChange}
          onClick={handleClick}
          value={inpText}
          placeholder={isUpdate ? "Enter new todo.." : "Add a todo.."}
        />
        <Zoom in={isClicked}>
          <Fab type="submit">
            {isUpdate ? <EditIcon /> : <AddIcon />}            
          </Fab>
        </Zoom>
        
      </form>
    </div>
    {isUpdate && <div className="cancelBtn">
        <button onClick={()=>{
          dispatch(setUpdateData(null));
          dispatch(toggleIsUpdate(false));
          dispatch(setInputText(""));
        }}>Cancel</button>
      </div>}
    </>
  );
}

export default Input;
