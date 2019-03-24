import React, {useState} from 'react'
import axios from 'axios'

const Todo = props => {

    const [todoName, setTodoName] = useState('')
    const [todoList, setTodoList] = useState([])

    //const [todoState, setTodoState] = useState({
      //  userInput: '',
      // todoList: []
    //})

    const inputChangeHandler = (event) => {
        setTodoName(event.target.value)
        //setTodoState({userInput: event.target.value, todoList: todoState.todoList})
    }

    const todoAddHandler = () =>{
        setTodoList(todoList.concat(todoName))
        //setTodoState({userInput: todoState.userInput, todoList: todoState.todoList.concat(todoState.userInput)})
        axios.post('https://hooks2.firebaseio.com/todos.json', {name: todoName})
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            
        })
    }

    return <React.Fragment>
        <input type="text" placeholder="todo" onChange={inputChangeHandler} value={todoName}/>
        <button type="button" onClick={todoAddHandler}>Add</button>
        <ul>
            {todoList.map(todo=>
                <li key={todo}>{todo}</li>
            )}
        </ul>
    </React.Fragment>
}

export default Todo