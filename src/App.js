import { useRef, useState } from 'react';
import './App.css';

function App() {

  const [x,setx] = useState([]);
  const TaskRef = useRef();

  const AddTask = () => {
    const value = TaskRef.current.value;
    const task = {completed : false , value};
    setx([...x,task]);
    TaskRef.current.value = "";
  }

  const Undo = (index) => {
    const newx = [...x];
    newx[index].completed = !newx[index].completed;
    setx(newx)
  }

  const DeleteTask = (index) => {
    const newx = [...x];
    newx.splice(index,1)
    setx(newx)
  }

  return (
    <div className="App">
      <h3>TODO LIST</h3>

      <ul>
        {
          x.map((item , index) => {
            return <div className='taskDiv'>
              <li className={item.completed? "completedStyle" : ""} onClick={ ()=>Undo(index) }>{item.value}</li>
              <span onClick={ ()=>DeleteTask(index) }>❌</span>
            </div>
          })
        }
      </ul>

      <input ref={TaskRef} placeholder='Enter new task'></input>
      <button onClick={AddTask}>Add</button>
    </div>
  );
}

export default App;
