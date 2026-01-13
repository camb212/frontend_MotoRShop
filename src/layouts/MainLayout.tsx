import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import FooterTiendaMotos from "../components/Piedepagina"

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <FooterTiendaMotos />
    </>
  )
}
