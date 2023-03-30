import { useState } from 'react';
import './form.css';
function Form(){
  const [todo,setTodo] = useState(['learn react','build mini projects']);
  const [task,setTask] = useState('');

  const [err,setErr] = useState('');

  function clickHandler(){
    event.preventDefault()
    if(task !== ''){
    setTodo(todo.concat(task))
    setTask('')
    setErr('')
    }
    else{
      setErr('please type the task you want to add');
    }
  }
  function changeHandler(e){
    if(e.target.value !== ''){
      setTask(e.target.value)
      setErr('')
    }
    else{
      setTask('')
      setErr('go and add task')
    }
  }

  const deleteHandler = (index) =>{
    const newTodos = [...todo];
    newTodos.splice(index, 1);
    setTodo(newTodos)
  }
  return(
    <div className = "container">
      <form className = "todo" onSubmit = {clickHandler}>
        <input type = "text" value = {task} onChange = {changeHandler}  />
        <button type = "submit" > addNewTask </button>
      </form>

      <h3 style = {{color:'red'}}> {err} </h3>

      <ul className = "items">
        {todo.map((t,index) => (<li>{t}
        <button className = "clicked" onClick = {() => deleteHandler(index)}>Delete</button>
        </li>
      ))}
      </ul>
    </div>
)}
export default Form;
