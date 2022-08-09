import "./App.css";
import Header from "./mycomponent/header";
import { Todo } from "./mycomponent/todo";
import { Todoitems } from "./mycomponent/todoitems";
import React, { useState, useEffect } from "react";
import { Footer } from "./mycomponent/footer";
import { Addtodo } from "./mycomponent/Addtodo";
import { About } from "./mycomponent/About";
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";

function App() {
  let inittodos;
  if (localStorage.getItem("todos") === null) {
    inittodos = [];
  } else {
    inittodos = JSON.parse(localStorage.getItem("todos"));
  }
  const addtodo = (title, desc) => {
    let sno;
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const Todo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    settodo([...todos, Todo]);

    return console.log("Add todo run", Todo);
  };
  const onDelete = (todo) => {
    console.log("Delete Executed", todo);

    settodo(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };

  const [todos, settodo] = useState(inittodos);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (<Router>
          <Header title="My Todos List" searchbar={false} />
        <Routes>
        
          <Route path="/about" element={<About/>} />
          
          <Route path="/" element={
            <>
            <Addtodo addtodo={addtodo} />
            <Todo />
            <Todoitems todos={todos} ondelete={onDelete} />
           </>
          } />
         
        </Routes>
        <Footer />
    </Router>
  );
}
export default App;

