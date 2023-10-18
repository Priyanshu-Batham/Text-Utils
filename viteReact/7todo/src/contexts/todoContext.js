import {createContext} from 'react'

export const TodoContext = createContext({
    todos : [{}],

    addTodo: () => {}, 
    deleteTodo: () => {},
    updateTodo: ()=>{},
    toggleComplete: ()=>{}
})

