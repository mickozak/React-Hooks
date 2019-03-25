import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Todo = props => {

    const [todoName, setTodoName] = useState('')
    const [todoList, setTodoList] = useState([])

    //const [todoState, setTodoState] = useState({
      //  userInput: '',
      // todoList: []
    //})

    useEffect(()=>{
        axios.get('https://hooks2.firebaseio.com/todos.json')
        .then(res=>{
            console.log(res)
            const todoData = res.data
            const todos = []
            for(const key in todoData) {
                todos.push({id: key, name: todoData[key].name})
            }
            setTodoList(todos)
        })
        return () => {
            console.log('cleanup')
        }
    }, [])

    const mouseMoveHandler = event =>{
        console.log(event.clientX, event.clientY)
        }

    useEffect(()=>{
        document.addEventListener('mousemove',mouseMoveHandler)
        return () => {
            document.removeEventListener('mousemove',mouseMoveHandler)
        }
    },[])

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
            console.log(err)
        })
    }

    return <React.Fragment>
        <input type="text" placeholder="todo" onChange={inputChangeHandler} value={todoName}/>
        <button type="button" onClick={todoAddHandler}>Add</button>
        <ul>
            {todoList.map(todo=>
                <li key={todo.id}>{todo.name}</li>
            )}
        </ul>
    </React.Fragment>
}

export default Todo