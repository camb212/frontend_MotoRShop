import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-black text-white min-h-screen p-4">
      <h1 className="text-xl font-bold mb-6">motoR+</h1>

      <nav className="space-y-3">
        <Link to="/" className="block hover:text-red-500">
          Dashboard
        </Link>

        <Link to="/inventory" className="block hover:text-red-500">
          Inventario
        </Link>

        <Link to="/crm" className="block hover:text-red-500">
          CRM
        </Link>

        <Link to="/sales" className="block hover:text-red-500">
          Ventas
        </Link>
      </nav>
    </aside>
  );
}
