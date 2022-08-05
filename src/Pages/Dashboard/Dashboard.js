import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <h2 className="text-5xl font-bold text-purple-500">Welcome to Your Dashboard</h2>
        <Outlet></Outlet>
        {/* <!-- Page content here --> */}
        
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li><Link to="/dashboard">My Appointment</Link></li>
          <li><Link to="/dashboard/reviews">My Reviews</Link></li>
          <li><Link to="/dashboard/history">History</Link></li>
          <li><Link to="/dashboard/users">ALl Users</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;