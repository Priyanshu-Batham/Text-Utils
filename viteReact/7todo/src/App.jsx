import { useState, useEffect } from 'react'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import { TodoContext } from './contexts/todoContext'

function App() {

  // defining global (context) vars and funs:
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prevTodos) => [...prevTodos, todo]);
  }
  
  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => (id != todo.id ? true : false)))
  }

  const updateTodo = (id, msg) => {
    setTodos((prevTodos)=> prevTodos.map((eachTodo)=>(eachTodo.id != id? eachTodo : {...eachTodo, msg: msg})))
  }

  const toggleComplete = (id) => {
    setTodos((prevTodos)=> prevTodos.map((eachTodo)=> (eachTodo.id != id? eachTodo: {...eachTodo, completed: !eachTodo.completed})))
  }

  // local storage
  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"));
    if(todos && todos.length > 0){
      setTodos(todos)
    }
  }, [])

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])



  return (
    <>
      <TodoContext.Provider value={{ todos, addTodo, deleteTodo, updateTodo, toggleComplete}}>
        <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
            <div className="mb-4">
              {/* todo form goes here */}
              <TodoForm />
            </div>

            <div className="flex flex-wrap gap-y-3">

              {/*Loop and Add TodoItem here */}
              {todos.map((todo) => (
                <div key={todo.id}
                  className='w-full'
                >
                  <TodoItem todo={todo} />
                </div>
              ))}

            </div>
          </div>
        </div>
      </TodoContext.Provider>
    </>
  )
}

export default App
