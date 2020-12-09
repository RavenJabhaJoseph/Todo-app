import React from 'react';

const ListTodo = ({ todos, deleteTodo }) => {
    return(
        <ul>
            {
             todos && todos.length > 0 ?
             (
                 todos.map(todo => {
                     return
                 })
             ) 
             :
             (
                 <li>No todo(s) left</li>
             )
            }
        </ul>
    )
}

export default ListTodo