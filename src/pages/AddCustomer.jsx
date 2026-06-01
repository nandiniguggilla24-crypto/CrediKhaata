import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CreditContext } from "../context/CreditContext";
import "./AddCustomer.css";

function AddCustomer() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const { customers, setCustomers } =
    useContext(CreditContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !phone) {
      alert("Please fill all fields");
      return;
    }

    const newCustomer = {
      id: Date.now(),
      name,
      phone,
    };

    setCustomers([...customers, newCustomer]);

    alert("Customer Added Successfully");

    navigate("/dashboard");
  };

  return (
    <div className="add-customer-page">
      <div className="customer-form-card">
        <h1>Add Customer</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Customer Name</label>

            <input
              type="text"
              placeholder="Enter customer name"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>

            <input
              type="tel"
              placeholder="Enter phone number"
              value={phone}
              onChange={(e) =>
                setPhone(e.target.value)
              }
            />
          </div>

          <button
            type="submit"
            className="submit-btn"
          >
            Add Customer
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddCustomer;