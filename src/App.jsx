import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import AddCustomer from "./pages/AddCustomer";
import AddLoan from "./pages/AddLoan";
import AddRepayment from "./pages/AddRepayment";
import CustomerDetails from "./pages/CustomerDetails";

import { AuthProvider } from "./context/AuthContext";
import { CreditProvider } from "./context/CreditContext";

function App() {
  return (
    <AuthProvider>
      <CreditProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-customer" element={<AddCustomer />} />
          <Route path="/add-loan" element={<AddLoan />} />
          <Route path="/add-repayment" element={<AddRepayment />} />
          <Route path="/customer/:id" element={<CustomerDetails />} />
        </Routes>
      </CreditProvider>
    </AuthProvider>
  );
}

export default App;