import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    console.log('Dashboard');
  })

  return (
    <h2>Dashboard</h2>
  );
};

export default Dashboard;
