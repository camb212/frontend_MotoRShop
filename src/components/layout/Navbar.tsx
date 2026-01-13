export default function Navbar() {
  return (
    <header className="bg-white shadow px-6 py-3 flex justify-between">
      <h2 className="font-semibold">Panel de Gestión</h2>

      <button className="bg-red-600 text-white px-3 py-1 rounded">
        Cerrar sesión
      </button>
    </header>
  );
}
