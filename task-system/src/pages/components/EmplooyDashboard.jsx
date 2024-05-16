import React from 'react';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="tasks">
        <h2>Tasks</h2>
        <div className="task-list">
          <a href="task1.html" className="task-item">
            <span>User ID: 12345</span>
            <span>Task Name: Task 1</span>
          </a>
          <a href="task2.html" className="task-item">
            <span>User ID: 12346</span>
            <span>Task Name: Task 2</span>
          </a>
          {Array.from({ length: 20 }, (_, index) => (
            <a href={`task${index + 3}.html`} className="task-item" key={index}>
              <span>User ID: 12347</span>
              <span>Task Name: Task {index + 3}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="employee-info">
        <img src="naruto.jpg" alt="Employee Photo" width="100" height="100" />
        <p><strong>Employee ID:</strong> 12345</p>
        <p><strong>Name:</strong> John</p>
        <p><strong>Surname:</strong> Doe</p>
        <p><strong>Email:</strong> john.doe@xyz.com</p>
        <p><strong>Phone:</strong> 123-456-7890</p>
        <div className="logout-button">
          <button>Logout</button>
        </div>
      </div>

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
