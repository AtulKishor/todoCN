import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const INITIAL_STATE = { todos: [], inpText: "", isUpdate: false, updateData: null, isLoading: false, error: null, status: null };

export const getTodosAsync = createAsyncThunk("todos/getTodos", ()=> axios.get(
  "https://jsonplaceholder.typicode.com/todos"
));

export const addTodosAsync = createAsyncThunk("todos/addTodos", (todo)=> axios.post(
  `https://jsonplaceholder.typicode.com/todos`, todo, {method: "POST", headers: {
    'Content-type': 'application/json; charset=UTF-8'}}
));

export const updateTodosAsync = createAsyncThunk("todos/updateTodos", (newTodo)=> axios.put(
  `https://jsonplaceholder.typicode.com/todos/${newTodo.id}`, newTodo, {method: "PUT", headers: {
    'Content-type': 'application/json; charset=UTF-8'}}
));

export const deleteTodosAsync = createAsyncThunk("todos/deleteTodos", (id)=> axios.delete(
  `https://jsonplaceholder.typicode.com/todos/${id}`, {method: "DELETE"}
));

const todosSlice = createSlice({
  name: "todos",
  initialState: INITIAL_STATE,
  reducers: {
    loading: (state, action) => {
      state.isLoading = true;
    },
    setInputText: (state, action) => {
      state.inpText = action.payload;
    },
    setUpdateData: (state, action) => {
      state.updateData = action.payload;
    },
    toggleIsUpdate: (state, action) => {
      state.isUpdate = action.payload;
    },
    clearStatus: (state, action) => {
      state.status = null;
    }
  },
  extraReducers: (builder)=>{
    // get
    builder.addCase(getTodosAsync.fulfilled, (state, action) => {
      state.todos = [...action.payload.data];
      state.isLoading = false;
    })    
    .addCase(getTodosAsync.rejected, (state, action) => {
      state.error = "Failed to fetch todos.";
      state.isLoading = false;
    })
    // post
    .addCase(addTodosAsync.fulfilled, (state, action) => {
      state.status = action.payload.data;
      console.log(state.status);
      alert('Added new Todo Successfully.')
    })    
    .addCase(addTodosAsync.rejected, (state, action) => {
      state.status = "Failed to add todos.";
      console.log(state.status);
    })
    // put
    .addCase(updateTodosAsync.fulfilled, (state, action) => {
      state.status = action.payload;      
      console.log(state.status);
      alert('Updated Todo Successfully.')
    })    
    .addCase(updateTodosAsync.rejected, (state, action) => {
      state.status = "Failed to update todos.";
      console.log(state.status);
    })
    // delete
    .addCase(deleteTodosAsync.fulfilled, (state, action) => {
      state.status = action.payload;
      console.log(state.status);
      alert('Deleted Todo Successfully.')
    })    
    .addCase(deleteTodosAsync.rejected, (state, action) => {
      state.status = "Failed to delete todos.";
      console.log(state.status);
    })

  }
});

export const todosReducer = todosSlice.reducer;
export const { loading, setInputText, clearStatus, setUpdateData, toggleIsUpdate } = todosSlice.actions;

export const todosSelector = (state) => state.todosReducer;
