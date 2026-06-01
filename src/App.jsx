import { BrowserRouter, Routes, Route } from "react-router-dom";

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
        <BrowserRouter>
          <Routes>

            {/* Authentication */}

            <Route
              path="/"
              element={<Login />}
            />

            <Route
              path="/signup"
              element={<Signup />}
            />

            {/* Dashboard */}

            <Route
              path="/dashboard"
              element={<Dashboard />}
            />

            {/* Customer */}

            <Route
              path="/add-customer"
              element={<AddCustomer />}
            />

            {/* Loan */}

            <Route
              path="/add-loan"
              element={<AddLoan />}
            />

            {/* Repayment */}

            <Route
              path="/add-repayment"
              element={<AddRepayment />}
            />

            {/* Customer Details */}

            <Route
              path="/customer/:id"
              element={<CustomerDetails />}
            />

          </Routes>
        </BrowserRouter>
      </CreditProvider>
    </AuthProvider>
  );
}

export default App;