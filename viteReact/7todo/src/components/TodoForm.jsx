import React, { useContext } from 'react'
import { TodoContext} from '../contexts/todoContext';

function TodoForm() {
    const {addTodo, todos} = useContext(TodoContext);
    
    function add(e){
        e.preventDefault();
        const msg = document.getElementById("writeTodo").value;
        // console.log(msg);

        addTodo({id: Date.now(), msg: msg, completed: false});
        console.log(todos);

    }

    return (
        <form  className="flex">
            <input
                id = "writeTodo"
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" onClick={add} className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;