import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CreditContext } from "../context/CreditContext";
import "./AddLoan.css";

function AddLoan() {
  const [customerId, setCustomerId] = useState("");
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");
  const [dueDate, setDueDate] = useState("");

  const { customers, loans, setLoans } =
    useContext(CreditContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !customerId ||
      !item ||
      !amount ||
      !dueDate
    ) {
      alert("Please fill all fields");
      return;
    }

    const newLoan = {
      id: Date.now(),
      customerId: Number(customerId),
      item,
      amount: Number(amount),
      balance: Number(amount),
      dueDate,
    };

    setLoans([...loans, newLoan]);

    alert("Loan Added Successfully");

    navigate("/dashboard");
  };

  return (
    <div className="loan-page">
      <div className="loan-card">
        <h1>Add Loan</h1>

        <form onSubmit={handleSubmit}>
          <select
            value={customerId}
            onChange={(e) =>
              setCustomerId(e.target.value)
            }
          >
            <option value="">
              Select Customer
            </option>

            {customers.map((customer) => (
              <option
                key={customer.id}
                value={customer.id}
              >
                {customer.name}
              </option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Item Sold"
            value={item}
            onChange={(e) =>
              setItem(e.target.value)
            }
          />

          <input
            type="number"
            placeholder="Loan Amount"
            value={amount}
            onChange={(e) =>
              setAmount(e.target.value)
            }
          />

          <input
            type="date"
            value={dueDate}
            onChange={(e) =>
              setDueDate(e.target.value)
            }
          />

          <button type="submit">
            Add Loan
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddLoan;