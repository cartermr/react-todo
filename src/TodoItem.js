import React from 'react'
import './App.css'

const TodoItem = (props) => {
    return (
        <li>{props.title}
            <button className='listBtn' onClick={() => {props.remove(props.index)}}>Remove</button>
        </li>
    )
}

export default TodoItem