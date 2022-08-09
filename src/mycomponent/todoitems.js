import React from 'react'

export const Todoitems = (props) => {

  
  return (
    <div className="container my-4" >
       {
        props.todos.length===0? "No todos to display":
       props.todos.map((todo)=>{
          return (
          <div key={todo.sno}>
          <h4 className="my-3" >{todo.title}</h4>
          <p className="my-3" >{todo.desc}</p>
          <button className='btn btn-sm btn-danger' onClick={()=>{props.ondelete(todo)}}>Delete</button>
          <hr></hr>
          </div>
          )
        })
        }
    </div>
  )
}
 