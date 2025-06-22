import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaUsers, FaUserShield, FaServicestack, FaShoppingCart, FaChartBar, FaClipboardList, FaSignOutAlt } from "react-icons/fa";
import "./AdminDashboard.css";
import { useNavigate } from "react-router-dom";

const tabs = [
  { key: "users", label: "Users", icon: <FaUsers /> },
  { key: "admins", label: "Admins", icon: <FaUserShield /> },
  { key: "services", label: "Services", icon: <FaServicestack /> },
  { key: "orders", label: "Orders", icon: <FaShoppingCart /> },
  { key: "reports", label: "Reports", icon: <FaChartBar /> },
  { key: "logs", label: "Logs", icon: <FaClipboardList /> },
];

function AdminDashboard() {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("users");
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      navigate("/admin/login");
      return;
    }
    fetchData(selectedTab, token);
  }, [selectedTab, navigate]);

  const fetchData = async (tab, token) => {
    setError("");
    setLoading(true);
    let url = `http://localhost:5000/api/admin/${tab}`;

    try {
      const res = await axios.get(url, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setData(res.data);
    } catch (err) {
      if (err.response?.status === 401) {
        localStorage.removeItem("adminToken");
        navigate("/admin/login");
      } else {
        setError("Failed to fetch data.");
      }
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  const formatDate = (dateString) =>
    dateString ? new Date(dateString).toLocaleString() : "";

  const renderTable = () => {
    if (loading) return <p className="loading-text">Loading data...</p>;
    if (error) return <p className="error-message">{error}</p>;
    if (!data.length) return <p>No data available.</p>;

    switch (selectedTab) {
      case "users":
        return (
          <table>
            <thead>
              <tr>
                <th>Email</th>
                <th>Joined At</th>
              </tr>
            </thead>
            <tbody>
              {data.map(({ _id, email, joinedAt }) => (
                <tr key={_id}>
                  <td>{email}</td>
                  <td>{formatDate(joinedAt)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );

      case "admins":
        return (
          <table>
            <thead>
              <tr>
                <th>Email</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {data.map(({ _id, email, role }) => (
                <tr key={_id}>
                  <td>{email}</td>
                  <td>{role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );

      case "services":
        return (
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Price</th>
                <th>Active</th>
              </tr>
            </thead>
            <tbody>
              {data.map(({ _id, title, description, price, active }) => (
                <tr key={_id}>
                  <td>{title}</td>
                  <td>{description}</td>
                  <td>${price?.toFixed(2)}</td>
                  <td>{active ? "Yes" : "No"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );

      case "orders":
        return (
          <table>
            <thead>
              <tr>
                <th>User ID</th>
                <th>Service ID</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map(({ _id, userId, serviceId, date, status }) => (
                <tr key={_id}>
                  <td>{userId}</td>
                  <td>{serviceId}</td>
                  <td>{formatDate(date)}</td>
                  <td>{status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );

      case "reports":
        return (
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Data</th>
                <th>Created At</th>
              </tr>
            </thead>
            <tbody>
              {data.map(({ _id, reportType, data: reportData, createdAt }) => (
                <tr key={_id}>
                  <td>{reportType}</td>
                  <td>
                    <pre>{JSON.stringify(reportData, null, 2)}</pre>
                  </td>
                  <td>{formatDate(createdAt)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );

      case "logs":
        return (
          <table>
            <thead>
              <tr>
                <th>Action</th>
                <th>Timestamp</th>
                <th>User ID</th>
              </tr>
            </thead>
            <tbody>
              {data.map(({ _id, action, timestamp, userId }) => (
                <tr key={_id}>
                  <td>{action}</td>
                  <td>{formatDate(timestamp)}</td>
                  <td>{userId}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );

      default:
        return null;
    }
  };

  return (
    <div className="admin-dashboard">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>Admin Panel</h2>
        </div>
        <nav className="sidebar-nav">
          {tabs.map(({ key, label, icon }) => (
            <button
              key={key}
              className={`sidebar-btn ${selectedTab === key ? "active" : ""}`}
              onClick={() => setSelectedTab(key)}
              aria-label={label}
            >
              <span className="icon">{icon}</span>
              <span className="label">{label}</span>
            </button>
          ))}
        </nav>
        <button onClick={handleLogout} className="logout-btn" aria-label="Logout">
          <FaSignOutAlt /> Logout
        </button>
      </aside>

      <main className="main-content">
        <header className="main-header">
          <h1>{tabs.find((t) => t.key === selectedTab).label}</h1>
        </header>

        <section className="content-area">{renderTable()}</section>
      </main>
    </div>
  );
}

export default AdminDashboard;
