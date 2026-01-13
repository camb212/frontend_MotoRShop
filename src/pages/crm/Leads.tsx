import { useState } from "react";
import {
  Search,
  Filter,
  Plus,
  Eye,
  Edit,
  Trash2,
  Phone,
  Mail,
  Calendar,
  User,
  Download,
  MoreVertical,
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
  id: number;
  nombre: string;
  email: string;
  telefono: string;
  estado: EstadoLead;
  interes: string;
  fecha: string;
  origen: string;
}

/* =======================
   COMPONENTE
======================= */
export default function Leads() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filterEstado, setFilterEstado] = useState<EstadoLead | "Todos">(
    "Todos"
  );
  const [selectedLeads, setSelectedLeads] = useState<number[]>([]);

  /* =======================
     DATOS (mock)
  ======================= */
  const leadsData: Lead[] = [
    {
      id: 1,
      nombre: "Juan Pérez",
      email: "juan@email.com",
      telefono: "0999999999",
      estado: "Nuevo",
      interes: "Yamaha R3",
      fecha: "2026-01-13",
      origen: "Web",
    },
    {
      id: 2,
      nombre: "María González",
      email: "maria@email.com",
      telefono: "0988888888",
      estado: "Contactado",
      interes: "Honda CBR",
      fecha: "2026-01-12",
      origen: "Facebook",
    },
    {
      id: 3,
      nombre: "Carlos Ruiz",
      email: "carlos@email.com",
      telefono: "0977777777",
      estado: "Cotizado",
      interes: "Suzuki GSX",
      fecha: "2026-01-11",
      origen: "Web",
    },
  ];

  /* =======================
     COLORES POR ESTADO
  ======================= */
  const estadoColors: Record<EstadoLead, string> = {
    Nuevo: "bg-blue-100 text-blue-800 border-blue-200",
    Contactado: "bg-yellow-100 text-yellow-800 border-yellow-200",
    Cotizado: "bg-purple-100 text-purple-800 border-purple-200",
    Cerrado: "bg-green-100 text-green-800 border-green-200",
    Perdido: "bg-red-100 text-red-800 border-red-200",
  };

  /* =======================
     FILTRO
  ======================= */
  const filteredLeads = leadsData.filter((lead) => {
    const matchSearch =
      lead.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.telefono.includes(searchTerm);

    const matchEstado =
      filterEstado === "Todos" || lead.estado === filterEstado;

    return matchSearch && matchEstado;
  });

  /* =======================
     HANDLERS
  ======================= */
  const handleSelectAll = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.checked) {
      setSelectedLeads(filteredLeads.map((l) => l.id));
    } else {
      setSelectedLeads([]);
    }
  };

  const handleSelectLead = (id: number) => {
    setSelectedLeads((prev) =>
      prev.includes(id)
        ? prev.filter((leadId) => leadId !== id)
        : [...prev, id]
    );
  };

  /* =======================
     RENDER
  ======================= */
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto bg-white rounded-xl border shadow">
        <table className="w-full">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="p-4">
                <input
                  type="checkbox"
                  onChange={handleSelectAll}
                  checked={
                    selectedLeads.length === filteredLeads.length &&
                    filteredLeads.length > 0
                  }
                />
              </th>
              <th className="text-left p-4">Cliente</th>
              <th className="text-left p-4">Estado</th>
              <th className="text-right p-4">Acciones</th>
            </tr>
          </thead>

          <tbody>
            {filteredLeads.map((lead) => (
              <tr key={lead.id} className="border-b hover:bg-gray-50">
                <td className="p-4">
                  <input
                    type="checkbox"
                    checked={selectedLeads.includes(lead.id)}
                    onChange={() => handleSelectLead(lead.id)}
                  />
                </td>

                <td className="p-4 font-semibold">{lead.nombre}</td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs border ${estadoColors[lead.estado]}`}
                  >
                    {lead.estado}
                  </span>
                </td>

                <td className="p-4 text-right flex justify-end gap-2">
                  <Eye className="w-4 h-4 cursor-pointer text-blue-600" />
                  <Edit className="w-4 h-4 cursor-pointer text-green-600" />
                  <Trash2 className="w-4 h-4 cursor-pointer text-red-600" />
                  <MoreVertical className="w-4 h-4 cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredLeads.length === 0 && (
          <div className="p-10 text-center text-gray-500">
            <User className="mx-auto mb-2 w-10 h-10" />
            No se encontraron leads
          </div>
        )}
      </div>
    </div>
  );
}
