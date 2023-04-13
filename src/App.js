import { useEffect, useState } from 'react';
import './App.css';



function App() {


  const date = new Date();

  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);


  const handleToDos = () => {
    if(todo == ''){
      alert("Please enter in a value.")
    }else{
      setTodo('')
      setTodos([todo , ...todos]);
    }

  }

  const handleDelete = (e) => {
   const id = e.target.id;
   const li = document.getElementById(id)
   li.remove()


  }

  return (
    <div className="App container-fluid">

      <div className='background'></div>
      <h1>ToDo App</h1>
      <p>what are you planning today?</p>

        <div className='topContainer  container'>
          <input name="todos" className='form-control' value={todo} onChange={(e) => setTodo(e.target.value)} type='text' placeholder="New Task" />
          <button  onClick={handleToDos} type='submit' className='btn'>Add</button>
        </div>


        <div className='middleContainer  container'>
          <p className='dateText'>{date.toDateString()}</p>
        </div>

      <div className='bottomContainer'>
          <ul className='todoContainer'>
            {
              todos.length <= 0 ? <p className='noText' style={{ textAlign: "center" }}>No Task</p>
                : todos.map((item , i) => {
                  return <li key={i} id={i} className='toDoItem'>
                    <p>{item}</p>
                    <button onClick={handleDelete} id={i} className='deleteBtn'>Remove</button>
                  </li>
                })

    
            }

          </ul>
      </div>

      <footer>Design & Develop by Qunnderrie Snelling &copy; {date.getFullYear()}</footer>


    </div>
  );
}

export default App;
