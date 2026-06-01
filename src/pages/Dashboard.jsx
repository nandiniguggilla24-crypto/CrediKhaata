import Sidebar from "../components/Sidebar";
import "./Dashboard.css";

function Dashboard() {
  return (
    <>
      <Sidebar />

      <div className="dashboard">
        <h1>Dashboard</h1>

        <div className="stats">
          <div className="card">
            <h3>Total Customers</h3>
            <p>5</p>
          </div>

          <div className="card">
            <h3>Total Outstanding</h3>
            <p>₹14,500</p>
          </div>

          <div className="card">
            <h3>Overdue Customers</h3>
            <p>2</p>
          </div>

          <div className="card">
            <h3>Up-to-date Customers</h3>
            <p>3</p>
          </div>
        </div>

        <div className="actions">
          <button>Add Customer</button>
          <button>Add Loan</button>
          <button>Add Repayment</button>
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Customer</th>
                <th>Outstanding</th>
                <th>Due Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Ramesh</td>
                <td>₹5000</td>
                <td>20 Jun 2026</td>
                <td>
                  <span className="overdue">
                    Overdue
                  </span>
                </td>
                <td>
                  <button>View</button>
                </td>
              </tr>

              <tr>
                <td>Aman</td>
                <td>₹3000</td>
                <td>25 Jun 2026</td>
                <td>
                  <span className="uptodate">
                    Up-to-date
                  </span>
                </td>
                <td>
                  <button>View</button>
                </td>
              </tr>
              <tr>
      <td>Suresh</td>
      <td>₹2500</td>
      <td>18 Jun 2026</td>
      <td>
        <span className="status overdue">
          Overdue
        </span>
      </td>
      <td>
        <button className="view-btn">
          View
        </button>
      </td>
    </tr>
    <tr>
  <td>Priya</td>
  <td>₹2000</td>
  <td>30 Jun 2026</td>
  <td>
    <span className="status up-to-date">Up-to-date</span>
  </td>
  <td>
    <button className="view-btn">View</button>
  </td>
</tr>
    <tr>
      <td>Neha Verma</td>
      <td>₹2000</td>
      <td>05 Jul 2026</td>
      <td>
        <span className="status up-to-date">
          Up-to-date
        </span>
      </td>
      <td>
        <button className="view-btn">
          View
        </button>
      </td>
    </tr>
         </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Dashboard;