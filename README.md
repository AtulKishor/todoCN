# TodoCN

TodoCN is a simple Todo App built with React and Redux Toolkit, demonstrating basic CRUD operations using the JSONPlaceholder API, createAsyncThunk and extraReducers.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Usage](#usage)
- [API Integration](#api-integration)
- [Code and Design Considerations](#code-and-design-considerations)
- [Contributing](#contributing)
- [Refernces](#refernces)


## Demo

Check out the live demo [here](https://todocn.onrender.com/).

## Features

- Fetches a list of todo items from an API
- Adds a new todo item and
- Updates an existing todo item using material UI
- Deletes a todo item

## Folder Structure

    src/
    ├── components/
    │ ├── Footer.js
    │ ├── Header.js
    │ ├── Input.js
    │ ├── TodoList.js
    ├── redux/
    │ └── reducers/
    │   └── todoReducer.js
    ├── styles.css
    ├── App.js
    ├── index.js
    ├── store.js


- `components/`: Contains all the reusable components like `Header`, `Footer`, `Input`, and `TodoList`.
- `redux/reducers/`: Contains Redux reducers, specifically `todoReducer.js`.
- `styles.css`: Contains the CSS styles for the application.
- `App.js`: The main component that integrates everything.
- `index.js`: The entry point of the application.
- `store.js`: Configures the Redux store.

## Installation

1. Clone the repository
   ```sh
   git clone https://github.com/AtulKishor/todoCN.git
2. Navigate to the project directory
   ```sh
   cd todoCN
3. Install Dependencies
   ```sh
   npm install

## Usage
1. Start the development server
   ```sh
   npm start
2. Open http://localhost:3000 to view it in the browser.

## API Integration

Fetch todos: GET https://jsonplaceholder.typicode.com/todos  
Add todo: POST https://jsonplaceholder.typicode.com/todos  
Update todo: PUT https://jsonplaceholder.typicode.com/todos/:id  
Delete todo: DELETE https://jsonplaceholder.typicode.com/todos/:id  

## About

Reducers: Defined using Redux Toolkit with createSlice and createAsyncThunk.  
Components: Separated into individual files for better maintainability.  
State Management: Handled with Redux, making use of async actions for API calls.  
Styling: Basic CSS styling applied.  
Error Handling: Basic error handling for async actions in the reducer.  

## Contributing

Contributions are welcome! Please fork the repository and create a pull request for any enhancements or bug fixes.

 - Fork the Project
 - Create your Feature Branch (git checkout -b feature/AmazingFeature)
 - Commit your Changes (git commit -m 'Add some AmazingFeature')
 - Push to the Branch (git push origin feature/AmazingFeature)
 - Open a Pull Request
