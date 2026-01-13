interface Moto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: string;
  imagen: string;
}

const motosEconomicas: Moto[] = [
  {
    id: 1,
    nombre: "Yamaha YBR 125",
    descripcion: "Moto económica, ideal para ciudad, bajo consumo y mantenimiento sencillo.",
    precio: "$2.300",
    imagen: "https://i.pinimg.com/1200x/29/f7/6f/29f76fa95ce88fec2ec7a4fa6a32c8e1.jpg",
  },
  {
    id: 2,
    nombre: "Honda CB125F",
    descripcion: "Confiable y eficiente, perfecta para el día a día.",
    precio: "$2.500",
    imagen: "https://i.pinimg.com/736x/6b/38/58/6b3858bc06ea1b3f88c95330afc9e2cb.jpg",
  },
  {
    id: 3,
    nombre: "Suzuki GN 125",
    descripcion: "Clásica, resistente y económica en combustible.",
    precio: "$2.200",
    imagen: "https://i.pinimg.com/1200x/e8/fe/54/e8fe54ceceea4ee897c637cb57ea197b.jpg",
  },
];

export default function MotoCards() {
  return (
    <section className="max-w-screen-2xl mx-auto px-6 mt-10">
      <h2 className="text-2xl font-bold mb-6">
        Promociones por inicio de año
      </h2>

      <div className="flex flex-col gap-6">
        {motosEconomicas.map((moto) => (
          <div
            key={moto.id}
            className="flex flex-col md:flex-row bg-white rounded-xl shadow-md overflow-hidden min-h-[260px]"
          >
            {/* Imagen */}
            <div className="md:w-1/3">
              <img
                src={moto.imagen}
                alt={moto.nombre}
                className="h-60 w-full object-cover"
              />
            </div>

            {/* Contenido */}
            <div className="md:w-2/3 p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold">
                  {moto.nombre}
                </h3>
                <p className="text-gray-600 mt-2">
                  {moto.descripcion}
                </p>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-x4 font-bold text-green-600">
                  {moto.precio}
                </span>

                <button
                  className="
                    bg-purple-700 text-white
                    px-5 py-2 rounded-lg
                    hover:bg-purple-800 transition
                  "
                >
                  Ver detalles
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
