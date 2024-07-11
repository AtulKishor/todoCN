import "./styles.css";
import { Provider } from "react-redux";
import { store } from "./store";

// components imports
import Header from "./components/Header";
import Footer from "./components/Footer";
import Input from "./components/Input";
import TodoList from "./components/TodoList";

export default function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <Input />
        <TodoList />
        <Footer />
      </Provider>
    </div>
  );
}
