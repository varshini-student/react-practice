
import { useState } from "react";

function Todo() {

  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  function addTask() {
    if(task.trim() === "") return;

    setList([...list, task]);
    setTask("");
  }

  function deleteTask(index) {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
  }

  return (
    <div>
      <h2>My ToDo List ✅</h2>

      <input
        type="text"
        placeholder="Enter a task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>Add</button>

      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteTask(index)}>❌</button>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default Todo;
