import "./App.css";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import Error from "./components/Error";
import Buttons from "./components/Buttons";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [tasksList,setTaskslist]=useState([])
  console.log("task list",tasksList)
  return (
    <div className="min-h-screen bg-slate-100 py-12 px-4">
        <main className="mx-auto max-w-md rounded-2xl bg-white p-6 shadow-lg">
          
          <Header title="Sabko List ho yo" desc="Hello sab jana"/>

          <TodoForm onAdd={setTaskslist} tasks ={[...tasksList]}/>

          <Error />

          <Buttons />

          <TodoList tasks={tasksList}/>

          <Footer />
        </main>
    </div>
  );
}

export default App;
