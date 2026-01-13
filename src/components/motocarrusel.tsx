import React, { useRef, useState } from "react";

interface Moto {
  id: number;
  nombre: string;
  descripcion: string;
  imagen: string;
}

const motos: Moto[] = [
  { id: 1, nombre: "Yamaha MT-07", descripcion: "689cc urbana", imagen: "https://cdn.bikedekho.com/processedimages/yamaha/mt-07/source/mt-075fa292e3dee11.jpg" },
  { id: 2, nombre: "Kawasaki Ninja 400", descripcion: "Deportiva ligera", imagen: "https://i.pinimg.com/736x/68/23/a8/6823a85460551a26773e5e51a20fd10e.jpg" },
  { id: 3, nombre: "Honda CB500X", descripcion: "Adventure", imagen: "https://i.pinimg.com/1200x/d1/92/27/d192278a953b36509c6063161436174f.jpg" },
  { id: 4, nombre: "Suzuki GSX-R750", descripcion: "SuperSport", imagen: "https://i.pinimg.com/1200x/24/ec/82/24ec8283359f0eedd11fb8135e8594f9.jpg" },
  { id: 5, nombre: "BMW G 310 GS", descripcion: "Trail ligera", imagen: "https://i.pinimg.com/1200x/fa/96/a7/fa96a7f83457dab3752c11f07943f18b.jpg" },
  { id: 6, nombre: "Ducati Monster", descripcion: "Naked agresiva", imagen: "https://i.pinimg.com/1200x/0c/ed/be/0cedbec1d7a8f8e266df8fd1a5310753.jpg" },
  { id: 7, nombre: "KTM Duke 390", descripcion: "Streetfighter", imagen: "https://i.pinimg.com/736x/3e/fe/a0/3efea0fbd0d6eaa36a58ff05cf041f5e.jpg" },
  { id: 8, nombre: "Royal Enfield Himalayan", descripcion: "Off-road", imagen: "https://i.pinimg.com/1200x/9e/44/dd/9e44dd504a8d58e79c0696c542dc9982.jpg" },
];

const MotoCarousel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    startX.current = e.pageX - carouselRef.current.offsetLeft;
    scrollLeft.current = carouselRef.current.scrollLeft;
  };

  const onMouseLeave = () => setIsDragging(false);
  const onMouseUp = () => setIsDragging(false);

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; // velocidad drag
    carouselRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <div className="w-full px-4">
      <h2 className="text-2xl font-bold mb-4">Motos disponibles</h2>

      <div
        ref={carouselRef}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        className="
          flex gap-4 overflow-x-auto pb-4
          cursor-grab active:cursor-grabbing
          select-none
          scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200
        "
      >
        {motos.map((moto) => (
          <div
            key={moto.id}
            className="min-w-[280px] bg-white rounded-xl shadow-md"
          >
            <img
              src={moto.imagen}
              alt={moto.nombre}
              draggable={false}
              className="h-40 w-full object-cover rounded-t-xl pointer-events-none"
            />

            <div className="p-4">
              <h3 className="text-lg font-semibold">{moto.nombre}</h3>
              <p className="text-sm text-gray-600">{moto.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MotoCarousel;
