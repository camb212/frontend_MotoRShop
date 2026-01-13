import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Dashboard from "../pages/dashboard/Dashboard";
import Motorcycles from "../pages/inventory/Motorcycles";
import Leads from "../pages/crm/Leads";
import Login from "../pages/auth/Login";
import Sales from "../sales/Sales";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/inventory" element={<Motorcycles />} />
          <Route path="/crm" element={<Leads />} />
          <Route path="/sales" element={<Sales />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
