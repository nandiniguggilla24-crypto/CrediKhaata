import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CreditContext } from "../context/CreditContext";
import "./CustomerDetails.css";

function CustomerDetails() {
  const { id } = useParams();

  const { customers, loans, repayments } =
    useContext(CreditContext);

  const customer = customers.find(
    (c) => c.id === Number(id)
  );

  if (!customer) {
    return <h2>Customer Not Found</h2>;
  }

  const customerLoans = loans.filter(
    (loan) => loan.customerId === customer.id
  );

  const customerRepayments = repayments.filter((repayment) =>
    customerLoans.some(
      (loan) => loan.id === repayment.loanId
    )
  );

  const outstandingBalance = customerLoans.reduce(
    (total, loan) => total + loan.balance,
    0
  );

  return (
    <div className="customer-details">
      <h1>Customer Details</h1>

      <div className="customer-card">
        <h2>{customer.name}</h2>
        <p>
          Outstanding Balance:
          <span> ₹{outstandingBalance}</span>
        </p>
      </div>

      <div className="section">
        <h2>Loans</h2>

        {customerLoans.map((loan) => (
          <div className="loan-card" key={loan.id}>
            <h3>{loan.item}</h3>

            <p>
              Amount:
              <strong> ₹{loan.amount}</strong>
            </p>

            <p>
              Due Date:
              <strong> {loan.dueDate}</strong>
            </p>

            <p>
              Remaining Balance:
              <strong> ₹{loan.balance}</strong>
            </p>
          </div>
        ))}
      </div>

      <div className="section">
        <h2>Repayments</h2>

        {customerRepayments.map((repayment) => (
          <div
            className="repayment-card"
            key={repayment.id}
          >
            <p>
              Amount Paid:
              <strong> ₹{repayment.amount}</strong>
            </p>

            <p>
              Date:
              <strong> {repayment.repaymentDate}</strong>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomerDetails;