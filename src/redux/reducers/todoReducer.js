import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = { todos: [], inpText: "", isUpdate: false, updateData: null, isLoading: false, error: null, status: null };

export const getTodosAsync = createAsyncThunk("todos/getTodos", async ()=>{
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos"
    );
    return await response.json();
  } catch (e) {
    console.log("error: ",e);
  }
});

export const addTodosAsync = createAsyncThunk("todos/addTodos", async (todo)=>{
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos", todo, {method: "POST", headers: {
    'Content-type': 'application/json; charset=UTF-8'}}
    );
    return await response.json();
  } catch (e) {
    console.log("error: ",e);
  }
});

export const updateTodosAsync = createAsyncThunk("todos/updateTodos", async (newTodo)=>{
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${newTodo.id}`, newTodo, {method: "PUT", headers: {
    'Content-type': 'application/json; charset=UTF-8'}}
  );
  return await response.json();
} catch (e) {
  console.log("error: ",e);
}
});

export const deleteTodosAsync = createAsyncThunk("todos/deleteTodos", async (id)=>{
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`, {method: "DELETE"}
  );
  return await response.json();
} catch (e) {
  console.log("error: ",e);
}
});

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
      state.todos = [...action.payload];
      state.isLoading = false;
    })    
    .addCase(getTodosAsync.rejected, (state, action) => {
      state.error = "Failed to fetch todos.";
      state.isLoading = false;
    })
    // post
    .addCase(addTodosAsync.fulfilled, (state, action) => {
      state.status = action.payload;
    })    
    .addCase(addTodosAsync.rejected, (state, action) => {
      state.status = "Failed to add todos.";
    })
    // put
    .addCase(updateTodosAsync.fulfilled, (state, action) => {
      state.status = action.payload;
    })    
    .addCase(updateTodosAsync.rejected, (state, action) => {
      state.status = "Failed to update todos.";
      console.log(state.status);
    })
    // delete
    .addCase(deleteTodosAsync.fulfilled, (state, action) => {
      state.status = action.payload;
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
