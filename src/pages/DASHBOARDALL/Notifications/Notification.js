import React from 'react';
import DashboardInterface from '../dashboardInterface';
import Navbar from '../Navbar/Navbar';
import "./notification.css"

function Notification() {
  return (
    <div>
        <DashboardInterface>
            <Navbar navlink="true" />
            <h1>Notifications coming up sooon</h1>
        </DashboardInterface>
    </div>
  )
}

export default Notification