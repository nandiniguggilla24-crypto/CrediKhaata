import { createContext, useState } from "react";

export const CreditContext = createContext();

export const CreditProvider = ({ children }) => {
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: "Ramesh",
      phone: "9876543210",
    },
  ]);

  const [loans, setLoans] = useState([
    {
      id: 1,
      customerId: 1,
      item: "Rice Bag",
      amount: 5000,
      balance: 4000,
      dueDate: "2026-06-30",
    },
  ]);

  const [repayments, setRepayments] = useState([]);

  return (
    <CreditContext.Provider
      value={{
        customers,
        setCustomers,
        loans,
        setLoans,
        repayments,
        setRepayments,
      }}
    >
      {children}
    </CreditContext.Provider>
  );
};