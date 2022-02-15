import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  // const [task, setTask] = useState({});

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setTasks(user.tasks);
  }, []);

  return (
    <ul>
      {
        tasks.map((name, description) => {
          return (
            <>
              <li>{ name }</li>
              <li>{ description }</li>
            </>
          )
        })
      }
    </ul>
    
  );
};

export default Dashboard;
