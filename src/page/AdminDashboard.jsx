import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [activeMenu, setActiveMenu] = useState("users");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAdmin");
    navigate("/admin/login");
  };

  return (
    <div className="admin-dashboard">
      <aside className="admin-sidebar">
        <h2>Admin Panel</h2>
        <nav>
          <ul>
            <li
              className={activeMenu === "users" ? "active" : ""}
              onClick={() => setActiveMenu("users")}
            >
              Users
            </li>
            <li
              className={activeMenu === "admins" ? "active" : ""}
              onClick={() => setActiveMenu("admins")}
            >
              Admins
            </li>
            <li
              className={activeMenu === "services" ? "active" : ""}
              onClick={() => setActiveMenu("services")}
            >
              Services
            </li>
            <li
              className={activeMenu === "orders" ? "active" : ""}
              onClick={() => setActiveMenu("orders")}
            >
              Orders
            </li>
            <li
              className={activeMenu === "reports" ? "active" : ""}
              onClick={() => setActiveMenu("reports")}
            >
              Reports
            </li>
            <li
              className={activeMenu === "settings" ? "active" : ""}
              onClick={() => setActiveMenu("settings")}
            >
              Settings
            </li>
            <li
              className={activeMenu === "logs" ? "active" : ""}
              onClick={() => setActiveMenu("logs")}
            >
              Logs
            </li>
            <li className="logout-button" onClick={handleLogout}>
              Logout
            </li>
          </ul>
        </nav>
      </aside>

      <main className="admin-content">
        {activeMenu === "users" && <h3>Manage Users Section</h3>}
        {activeMenu === "admins" && <h3>Manage Admins Section</h3>}
        {activeMenu === "services" && <h3>Manage Services Section</h3>}
        {activeMenu === "orders" && <h3>Manage Orders Section</h3>}
        {activeMenu === "reports" && <h3>View Reports Section</h3>}
        {activeMenu === "settings" && <h3>Settings Section</h3>}
        {activeMenu === "logs" && <h3>System Logs Section</h3>}
      </main>
    </div>
  );
};

export default AdminDashboard;
