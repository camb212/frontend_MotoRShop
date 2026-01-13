import { Routes, Route } from "react-router-dom"
import Home from "../pages/HomePage"
import Login from "../pages/auth/Login"
import MainLayout from "../layouts/MainLayout"
import Nosotros from "../pages/Nosotros"

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path = "/nosotros" element={<Nosotros />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  )
}
