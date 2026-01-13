import React, { useState } from "react";

export default function LabTwForm() {
  const [base, setBase] = useState("");
  const [altura, setAltura] = useState("");
  const [area, setArea] = useState<number | null>(null);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();

    const resultado = (Number(base) * Number(altura)) / 2;
    setArea(resultado);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-3xl px-4 py-10">
        <h2 className="text-xl font-extrabold">LAB: Area de un Triangulo</h2>

        <form onSubmit={submit} className="mt-5 max-w-xl space-y-4">
          
          {/* Base */}
          <div>
            <label className="block text-sm font-semibold text-white/80">
              Base
            </label>
            <input
              className="h-11 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-white outline-none focus:ring-2 focus:ring-blue-600/50"
              type="number"
              placeholder="Ingrese la base"
              value={base}
              onChange={(e) => setBase(e.target.value)}
              required
            />
          </div>

          {/* Altura */}
          <div>
            <label className="block text-sm font-semibold text-white/80">
              Altura
            </label>
            <input
              className="h-11 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-white outline-none focus:ring-2 focus:ring-blue-600/50"
              type="number"
              placeholder="Ingrese la altura"
              value={altura}
              onChange={(e) => setAltura(e.target.value)}
              required
            />
          </div>

          {/* Botón */}
          <button
            className="h-11 rounded-xl bg-blue-600 px-5 font-semibold hover:bg-blue-500 transition"
            type="submit"
          >
            Calcular área
          </button>
        </form>

        {/* Resultado */}
        {area !== null && (
          <div className="mt-6 rounded-xl bg-white/5 p-4">
            <p className="text-lg font-semibold">
              Área del triángulo: <span className="text-blue-400">{area}</span>
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
