import { ReactNode } from "react";
import {
  DollarSign,
  Users,
  Target,
  Bike,
  ArrowUp,
  ArrowDown,
  Clock,
} from "lucide-react";

/* =========================
   TIPOS
========================= */

interface KPIProps {
  title: string;
  value: string;
  subtitle: string;
  icon: ReactNode;
  trend?: string;
  positive?: boolean;
  extra?: string;
  color: "red" | "blue" | "green" | "purple";
}

/* =========================
   DATOS
========================= */

const kpis: KPIProps[] = [
  {
    title: "Ventas del Mes",
    value: "$45,230",
    subtitle: "25 motos vendidas",
    icon: <DollarSign />,
    trend: "+12.5%",
    positive: true,
    color: "red",
  },
  {
    title: "Leads Activos",
    value: "123",
    subtitle: "45 nuevos esta semana",
    icon: <Users />,
    trend: "+8.2%",
    positive: true,
    color: "blue",
  },
  {
    title: "Conversión",
    value: "32.5%",
    subtitle: "Del total de leads",
    icon: <Target />,
    trend: "-2.1%",
    positive: false,
    color: "green",
  },
  {
    title: "Inventario",
    value: "87",
    subtitle: "Motos disponibles",
    icon: <Bike />,
    extra: "45 días",
    color: "purple",
  },
];

const actividad = [
  { accion: "Venta registrada", cliente: "Carlos Méndez", tiempo: "Hace 2h" },
  { accion: "Lead convertido", cliente: "Ana García", tiempo: "Hace 4h" },
  { accion: "Nuevo lead", cliente: "Pedro Ruiz", tiempo: "Hace 5h" },
];

/* =========================
   DASHBOARD
========================= */

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">

        <header className="mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-gray-600">Resumen general del negocio</p>
        </header>

        {/* KPIs */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {kpis.map((kpi, i) => (
            <KPI key={i} {...kpi} />
          ))}
        </section>

        {/* Actividad */}
        <section className="bg-white rounded-xl border p-6">
          <h2 className="font-semibold mb-4">Actividad Reciente</h2>
          <div className="space-y-3">
            {actividad.map((item, i) => (
              <div key={i} className="border-l-4 border-red-500 pl-4">
                <p className="font-medium">{item.accion}</p>
                <p className="text-sm text-gray-600">{item.cliente}</p>
                <p className="text-xs text-gray-400">{item.tiempo}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}

/* =========================
   COMPONENTE KPI
========================= */

function KPI({
  title,
  value,
  subtitle,
  icon,
  trend,
  positive = true,
  extra,
  color,
}: KPIProps) {
  return (
    <div className="bg-white rounded-xl border p-6">
      <div className="flex justify-between mb-4">

        <div className={`p-3 rounded-lg bg-${color}-100 text-${color}-600`}>
          {icon}
        </div>

        {trend && (
          <span className={`flex items-center text-sm ${positive ? "text-green-600" : "text-red-600"}`}>
            {positive ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
            {trend}
          </span>
        )}

        {extra && (
          <span className="flex items-center text-sm text-gray-500">
            <Clock size={16} className="mr-1" />
            {extra}
          </span>
        )}
      </div>

      <h3 className="text-sm text-gray-500">{title}</h3>
      <p className="text-3xl font-bold">{value}</p>
      <p className="text-sm text-gray-500">{subtitle}</p>
    </div>
  );
}
