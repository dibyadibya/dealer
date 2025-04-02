// src/App.js
import React from 'react';
import { NotificationProvider } from './NotificationContext'; // Updated import
import DealerDashboard from './DealerDashboard';

const App = () => {
  return (
    <NotificationProvider>
      <DealerDashboard />
    </NotificationProvider>
  );
};

export default App;