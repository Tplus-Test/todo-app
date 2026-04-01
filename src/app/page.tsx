"use client";

import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

type Todo ={
  id:number;
  text:string;
  completed:boolean;
}

export default function Home() {
  const [todos, setTodos]=useState<Todo[]>([]);
  const [input, setInput]=useState("");


  const addTodo = ()=>{
    if(!input.trim())
      return;
    setTodos([...todos, {id:Date.now(), text:input.trim(), completed:false}]);
    setInput("");
  }

  const toggleTodo = (id:number)=>{
    setTodos(todos.map((t)=>(t.id ===id ? {...t,completed: !t.completed}:t)))
  }


  const deleteTodo = (id:number)=>{
    setTodos(todos.filter((t)=>t.id !==id))
  }

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="bg-white rounded-2xl shadow-md p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">TEST LIST APP</h1>
        <TodoInput 
        input={input}
        onChange={setInput}
        onAdd={addTodo}
        ></TodoInput>
        <TodoList 
        todos={todos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
        ></TodoList>
      </div>

    </main>
  );
}