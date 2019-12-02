// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'

function TodoList(props) {
    return (
        <div>
            {props.list ? props.list.map((item) => { return <Todo item={item} key={item.id} handleChange={props.handleChange} /> }) : ''}
        </div>
    )
}

export default TodoList;