import React, {useState} from 'react'

const Todo = props => {

    const inputState = useState()

    const inputChangeHandler = (event) => {
        inputState[1](event.target.value)
    }

    return <React.Fragment>
        <input type="text" placeholder="todo" onChange={inputChangeHandler} value={inputState[0]}/>
        <button type="button">Add</button>
        <ul>

        </ul>
    </React.Fragment>
}

export default Todo