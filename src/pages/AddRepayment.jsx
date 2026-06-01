import { useState, useContext } from "react";
import { CreditContext } from "../context/CreditContext";
import "./AddRepayment.css";

function AddRepayment() {
  const { loans, repayments, setRepayments, setLoans } =
    useContext(CreditContext);

  const [loanId, setLoanId] = useState("");
  const [amount, setAmount] = useState("");
  const [repaymentDate, setRepaymentDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!loanId || !amount || !repaymentDate) {
      alert("Please fill all fields");
      return;
    }

    const repayment = {
      id: Date.now(),
      loanId: Number(loanId),
      amount: Number(amount),
      repaymentDate,
    };

    setRepayments([...repayments, repayment]);

    const updatedLoans = loans.map((loan) =>
      loan.id === Number(loanId)
        ? {
            ...loan,
            balance: loan.balance - Number(amount),
          }
        : loan
    );

    setLoans(updatedLoans);

    alert("Repayment Added Successfully");
  };

  return (
    <div className="repayment-page">
      <div className="repayment-card">
        <h1>Add Repayment</h1>

        <form onSubmit={handleSubmit}>
          <select
            value={loanId}
            onChange={(e) => setLoanId(e.target.value)}
          >
            <option value="">Select Loan</option>

            {loans.map((loan) => (
              <option key={loan.id} value={loan.id}>
                {loan.item} - ₹{loan.balance}
              </option>
            ))}
          </select>

          <input
            type="number"
            placeholder="Repayment Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <input
            type="date"
            value={repaymentDate}
            onChange={(e) => setRepaymentDate(e.target.value)}
          />

          <button type="submit">
            Record Repayment
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddRepayment;