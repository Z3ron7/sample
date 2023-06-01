import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import CustomerEntry from "./pages/CustomerEntry";
import CustomerInsured from "./pages/CustomerInsured";
import Coverage from "./pages/Coverage";
import Login from "./buttons/Login";
import Signup from "./buttons/Signup";
import Home from "./pages/Home";
import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar";
import Admin from "./component/Admin";
import ProdList from "./pages/ProdList";
import InsuredList from "./pages/InsuredList";
import ProdUpdate from "./component/ProdUpdate";
import InsuredUpdate from "./component/InsuredUpdate";
import LoginAdmin from "./component/AdminLogin";
import Logout from "./buttons/Logout";

// Layout component with Sidebar and Navbar
const MainLayout = ({ children }) => (
  <div>
    <Navbar />
    <Sidebar />
    {children}
  </div>
);

// Layout component without Sidebar and Navbar
const EmptyLayout = ({ children }) => <div>{children}</div>;

// Custom protected route component

function App() {
  const isAuthenticated = () => {
    const token = localStorage.getItem("token");
    return token !== null;
  };

  return (
    <Routes>
      <Route path="/s" element={<MainLayout><Home /></MainLayout>} />
      <Route path="/signup" element={<EmptyLayout><Signup /></EmptyLayout>} />
      <Route path="/" element={<EmptyLayout><Login /></EmptyLayout>} />
      <Route path="/logout" element={<EmptyLayout><Logout /></EmptyLayout>} />
      <Route path="/loginadmin" element={<MainLayout><LoginAdmin /></MainLayout>} />

      <Route
        path="/customerEntry"
        element={isAuthenticated() ? <MainLayout><CustomerEntry /></MainLayout> : <Navigate to="/customerEntry" replace />}
      />
      <Route
        path="/customerInsured"
        element={isAuthenticated() ? <MainLayout><CustomerInsured /></MainLayout> : <Navigate to="/" replace />}
      />
      <Route
        path="/coverage"
        element={isAuthenticated() ? <MainLayout><Coverage /></MainLayout> : <Navigate to="/" replace />}
      />
      <Route
        path="/admin"
        element={isAuthenticated() ? <MainLayout><Admin /></MainLayout> : <Navigate to="/" replace />}
      />
      <Route
        path="/productList"
        element={isAuthenticated() ? <MainLayout><ProdList /></MainLayout> : <Navigate to="/" replace />}
      />
      <Route
        path="/insuredList"
        element={isAuthenticated() ? <MainLayout><InsuredList /></MainLayout> : <Navigate to="/" replace />}
      />
      <Route
        path="/ProdUpdate"
        element={isAuthenticated() ? <MainLayout><ProdUpdate /></MainLayout> : <Navigate to="/" replace />}
      />
      <Route
        path="/prodUpdate/:id"
        element={isAuthenticated() ? <MainLayout><ProdUpdate /></MainLayout> : <Navigate to="/" replace />}
      />
      <Route
        path="/InsuredUpdate"
        element={isAuthenticated() ? <MainLayout><InsuredUpdate /></MainLayout> : <Navigate to="/" replace />}
      />
      <Route
        path="/InsuredUpdate/:id"
        element={isAuthenticated() ? <MainLayout><InsuredUpdate /></MainLayout> : <Navigate to="/" replace />}
      />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;

