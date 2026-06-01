import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="logo">CrediKhaata</h2>

      <nav>
        <Link to="/dashboard">📊 Dashboard</Link>
        <Link to="/add-customer">👤 Add Customer</Link>
        <Link to="/add-loan">💰 Add Loan</Link>
        <Link to="/add-repayment">💳 Add Repayment</Link>
        <Link to="/">🚪 Logout</Link>
      </nav>
    </div>
  );
}

export default Sidebar;