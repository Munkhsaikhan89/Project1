import React, { useState } from 'react';

const Dashboard = () => {
  const [tasks, setTasks] = useState([
    { userId: '12345', taskName: 'Task 1' },
    { userId: '12346', taskName: 'Task 2' },
    ...Array.from({ length: 20 }, (_, index) => ({ userId: '12347', taskName: `Task ${index + 3}` }))
  ]);

  const [newTask, setNewTask] = useState({ userId: '', taskName: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.userId && newTask.taskName) {
      setTasks([...tasks, { ...newTask }]);
      setNewTask({ userId: '', taskName: '' });
    }
  };

  return (
    <div className="dashboard-container">
      {/* Tasks Section */}
      <div className="tasks1">
        <h2>Tasks</h2>
        <h1>Add task</h1>
        <div className="task-list">
          {tasks.map((task, index) => (
            <div className="task-item" key={index}>
              <span>EmployeeID: {task.userId}</span>
              <span>Task Name: {task.taskName}</span>
            </div>
          ))}
        </div>
        <div className="task-item">  <section className="task-form-section">
          <form onSubmit={handleAddTask} className="task-form">
            <div className="task-list">
                <input
              type="text"
              name="EmployeeId"
              placeholder="Employee ID"
              value={newTask.userId}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="taskName"
              placeholder="Task Name"
              value={newTask.taskName}
              onChange={handleInputChange}
              required
            />
            <div className="logout-button">            
                <button type="button">Add Task</button>
            </div>
            </div>
            
          </form>
        </section>
        </div>
      </div>

      {/* Employee Information Section */}
      <div className="employee-info">
        <img src="naruto.jpg" alt="John Doe's Photo" />
        <p><strong>User ID:</strong> 12345</p>
        <p><strong>Name:</strong> John</p>
        <p><strong>Surname:</strong> Doe</p>
        <p><strong>Email:</strong> john.doe@xyz.com</p>
        <p><strong>Phone:</strong> 123-456-7890</p>
        <div className="logout-button">
          <button type="button">Logout</button>
        </div>
      </div>

      {/* Company Notices Section */}
      <div className="company-notices">
        <h2>Company Notices</h2>
        <ul>
          {Array.from({ length: 10 }, (_, index) => (
            <li key={index}>Notice {index + 1}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
