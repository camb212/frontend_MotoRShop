import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation(); // Para saber en qué ruta estamos

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-4xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="https://i.pinimg.com/736x/90/c0/24/90c024c470994c04edc06398d0bc9515.jpg"
            className="h-8"
            alt="Logo"
          />
          <span className="text-xl font-semibold dark:text-white">
            MotorR+
          </span>
        </Link>

        {/* Botón mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden inline-flex items-center p-2 text-gray-500 rounded-lg hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Menú */}
        <div
          className={`${open ? "block" : "hidden"} w-full lg:flex lg:w-auto lg:items-center`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-8 mt-4 lg:mt-0 font-medium">
            <NavItem label="Home" to="/" currentPath={location.pathname} />
            <NavItem label="Nosotros" to="/nosotros" currentPath={location.pathname} />
            <NavItem label="Motos" to="/motos" currentPath={location.pathname} />
            <NavItem label="Equipo" to="/equipo" currentPath={location.pathname} />
            <NavItem label="Contacto" to="/contacto" currentPath={location.pathname} />
          </ul>
        </div>

        {/* Botón derecha */}
        <div className="hidden lg:block">
          <Link
            to="/login"
            className="text-white bg-purple-700 hover:bg-purple-800 px-4 py-2 rounded-lg text-sm font-medium"
          >
            Iniciar Sesión
          </Link>
        </div>
      </div>
    </nav>
  );
}

interface NavItemProps {
  label: string;
  to: string;
  currentPath: string;
}

function NavItem({ label, to, currentPath }: NavItemProps) {
  const isActive = currentPath === to;

  return (
    <li>
      <Link
        to={to}
        className={`block py-2 px-3 rounded lg:p-0 ${
          isActive
            ? "text-purple-700 font-semibold"
            : "text-gray-700 hover:text-purple-700 dark:text-gray-400 dark:hover:text-white"
        }`}
      >
        {label}
      </Link>
    </li>
  );
}
