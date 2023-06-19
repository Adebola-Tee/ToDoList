import "./tasklist.css";
import React, { useState, useEffect } from 'react';

function TaskList() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleSubmit = event => {
    event.preventDefault();
    const newTask = {
      title: event.target.title.value,
      description: event.target.description.value,
      status: false
    };
    setTasks([...tasks, newTask]);
    event.target.reset();
    const audio = new Audio('../assets/music/taskadded.mp3');
    audio.play();
  }
  window.onload = function() {
    let placeholders = [
      "e.g, Meeting with Nancy by 11PM",
      "Task submission 72hours from now"
    ];
    let placeholderIndex = 0;
    let inputBox = document.getElementById("title");
  
    function changePlaceholder() {
      inputBox.placeholder = placeholders[placeholderIndex % placeholders.length];
      placeholderIndex++
    }
  
    setInterval(changePlaceholder, 3000);
  }; 

  const handleStatusChange = index => {
    const newTasks = [...tasks];
    newTasks[index].status = !newTasks[index].status;
    setTasks(newTasks);
  }

  const handleDelete = index => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
    const audio = new Audio('../assets/music/delete sound.mp3');
    audio.play();
  }

  return (
    <div>
      <form className="task--form" onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" className="task--input" name="title" required />
        <label htmlFor="description">Description:</label>
        <input type="text" id="description" className="task--input" name="description" placeholder="description" required />
        <button type="submit" className="addtask-btn">Add Task</button>
      </form>
      <ul className="task-unorderedlist">
  {tasks.map((task, index) => (
    <li key={index} className="task-list">
      <input
        className="checkbox-input"
        type="checkbox"
        checked={task.status}
        onChange={() => {
          handleStatusChange(index);
          const audio = new Audio('../assets/music/popsound.mp3');
          audio.play();
        }}
      />
      <div className="task--info">
        <span className="task-title">{task.title}</span>
        <br/>
        <div className="task-description-deletebtn">
          <p className="task-description">{task.description}</p>
          <button onClick={() => handleDelete(index)} className="delete-btn">Delete</button>
        </div>
      </div>
    </li>
  ))}
</ul>
    </div>
  );
}

export default TaskList;

