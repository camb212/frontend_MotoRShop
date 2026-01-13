export default function Motorcycles() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Inventario de Motocicletas</h1>

      <div className="bg-white p-4 rounded shadow">
        <p>Aquí va la tabla de motocicletas</p>

        <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded">
          Agregar motocicleta
        </button>
      </div>
    </div>
  );
}
