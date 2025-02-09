import EditIcon from '@mui/icons-material/Edit';
import Delete from "@mui/icons-material/Delete";

import { todosSelector, loading, setUpdateData, setInputText, toggleIsUpdate, clearStatus,
  getTodosAsync, deleteTodosAsync 
} from "../redux/reducers/todoReducer";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

// for toast notifications
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TodoList = () => {
  const {todos, isLoading, error} = useSelector(todosSelector);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(loading());
    dispatch(getTodosAsync());
    toast.success('Fetched All Todos Successfully.');
  },[]);

  if (isLoading){
    return <p>Loading...</p>
  }
  if (error){
    return <p>{error}</p>
  }
  
  return (
    <div className="todoList">
    {todos.map(({id, title, completed}) => (
      <div className={completed? "todoItem done" : "todoItem notDone"} key={id}>
          <p>{title}</p>
          <div className='listBtn'>
              <button onClick={()=>{
                dispatch(setUpdateData({id, title, completed}));
                dispatch(toggleIsUpdate(true));
                dispatch(setInputText(title));
                }}>
                  <EditIcon />
              </button>
              <button onClick={()=>{
                dispatch(deleteTodosAsync(id));          
                dispatch(clearStatus());
                toast.success('Deleted Todo Successfully.');
                }}>
                  <Delete />
              </button>
          </div>
      </div>
    ))}
    </div>
  );
};

export default TodoList;
