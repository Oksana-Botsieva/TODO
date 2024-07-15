import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { TodoList } from "./components/TodoList/TodoList";

function App() {
  return (
    <div className="App">
      <Header title="Todo List" />
      <TodoList />
    </div>
  );
}

export default App;