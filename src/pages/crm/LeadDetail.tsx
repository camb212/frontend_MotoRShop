import { useState } from "react";
import {
  ArrowLeft,
  User,
  Mail,
  Phone,
  Calendar,
  MessageSquare,
  Save,
  TrendingUp,
  Edit2,
  Check,
} from "lucide-react";

/* =======================
   TIPOS
======================= */
type EstadoLead =
  | "Nuevo"
  | "Contactado"
  | "Cotizado"
  | "Cerrado"
  | "Perdido";

interface Lead {
  nombre: string;
  email: string;
  telefono: string;
  estado: EstadoLead;
  mensaje: string;
  fecha: string;
  origen: string;
  interes: string;
}

/* =======================
   COMPONENTE
======================= */
export default function LeadDetail() {
  const [estado, setEstado] = useState<EstadoLead>("Nuevo");
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [notas, setNotas] = useState<string>("");

  const lead: Lead = {
    nombre: "Juan Pérez",
    email: "juan@email.com",
    telefono: "0999999999",
    estado: "Nuevo",
    mensaje:
      "Estoy interesado en una motocicleta deportiva, preferiblemente de 250cc. Mi presupuesto es de $5,000.",
    fecha: "2026-01-10",
    origen: "Formulario Web",
    interes: "Yamaha R3 2024",
  };

  const estadoColors: Record<EstadoLead, string> = {
    Nuevo: "bg-blue-100 text-blue-800 border-blue-200",
    Contactado: "bg-yellow-100 text-yellow-800 border-yellow-200",
    Cotizado: "bg-purple-100 text-purple-800 border-purple-200",
    Cerrado: "bg-green-100 text-green-800 border-green-200",
    Perdido: "bg-red-100 text-red-800 border-red-200",
  };

  const handleGuardar = () => {
    console.log("Guardando cambios", { estado, notas });
    setIsEditing(false);
  };

  const handleConvertir = () => {
    console.log("Convirtiendo lead en venta");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <button className="flex items-center text-gray-600 hover:text-gray-900 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver a Leads
          </button>

          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Detalle del Lead
              </h1>
              <p className="text-gray-500">ID: #L-1023</p>
            </div>

            <span
              className={`px-4 py-2 rounded-full border-2 font-semibold text-sm ${estadoColors[estado]}`}
            >
              {estado}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Columna Principal */}
          <div className="lg:col-span-2 space-y-6">
            {/* Información */}
            <div className="bg-white rounded-xl border p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <User className="w-5 h-5 mr-2 text-red-600" />
                Información del Cliente
              </h2>

              <div className="grid grid-cols-2 gap-4">
                <Info label="Nombre" value={lead.nombre} icon={<User />} />
                <Info label="Email" value={lead.email} icon={<Mail />} />
                <Info label="Teléfono" value={lead.telefono} icon={<Phone />} />
                <Info label="Fecha" value={lead.fecha} icon={<Calendar />} />
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4 border-t pt-4">
                <Info label="Origen" value={lead.origen} />
                <Info label="Interés" value={lead.interes} />
              </div>
            </div>

            {/* Mensaje */}
            <div className="bg-white rounded-xl border p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <MessageSquare className="w-5 h-5 mr-2 text-red-600" />
                Mensaje
              </h2>
              <p className="bg-gray-50 p-4 rounded border">{lead.mensaje}</p>
            </div>

            {/* Notas */}
            <div className="bg-white rounded-xl border p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold flex items-center">
                  <Edit2 className="w-5 h-5 mr-2 text-red-600" />
                  Notas
                </h2>
                {!isEditing && (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="text-red-600 font-medium"
                  >
                    Editar
                  </button>
                )}
              </div>

              {isEditing ? (
                <>
                  <textarea
                    value={notas}
                    onChange={(e) => setNotas(e.target.value)}
                    className="w-full border rounded p-3 h-28"
                  />
                  <div className="flex gap-2 mt-3">
                    <button
                      onClick={handleGuardar}
                      className="bg-red-600 text-white px-4 py-2 rounded flex items-center"
                    >
                      <Check className="w-4 h-4 mr-2" />
                      Guardar
                    </button>
                    <button
                      onClick={() => setIsEditing(false)}
                      className="bg-gray-200 px-4 py-2 rounded"
                    >
                      Cancelar
                    </button>
                  </div>
                </>
              ) : (
                <p className="text-gray-500 italic">
                  {notas || "No hay notas"}
                </p>
              )}
            </div>
          </div>

          {/* Lateral */}
          <div className="space-y-6">
            {/* Estado */}
            <div className="bg-white rounded-xl border p-6">
              <h2 className="text-xl font-semibold mb-4">Estado</h2>
              {(
                ["Nuevo", "Contactado", "Cotizado", "Cerrado", "Perdido"] as EstadoLead[]
              ).map((opcion) => (
                <label
                  key={opcion}
                  className={`flex items-center p-3 rounded border-2 mb-2 cursor-pointer ${
                    estado === opcion
                      ? "border-red-600 bg-red-50"
                      : "border-gray-200"
                  }`}
                >
                  <input
                    type="radio"
                    checked={estado === opcion}
                    onChange={() => setEstado(opcion)}
                    className="mr-3"
                  />
                  {opcion}
                </label>
              ))}
            </div>

            {/* Acciones */}
            <div className="bg-white rounded-xl border p-6 space-y-3">
              <button
                onClick={handleGuardar}
                className="w-full bg-red-600 text-white py-3 rounded flex items-center justify-center"
              >
                <Save className="w-4 h-4 mr-2" />
                Guardar Cambios
              </button>

              <button
                onClick={handleConvertir}
                className="w-full bg-green-600 text-white py-3 rounded flex items-center justify-center"
              >
                <TrendingUp className="w-4 h-4 mr-2" />
                Convertir en Venta
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =======================
   COMPONENTE AUXILIAR
======================= */
function Info({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon?: React.ReactNode;

}) {
  return (
    <div className="flex items-start gap-3">
      {icon && <div className="text-gray-400">{icon}</div>}
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="font-semibold">{value}</p>
      </div>
    </div>
  );
}
