import React from "react";

export default function Nosotros() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-blue-600 py-16 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre Nosotros</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Conoce nuestra misión, visión y valores que nos impulsan a ofrecer lo mejor en gestión de vehículos.
        </p>
      </header>

      {/* Sección Misión */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Nuestra Misión</h2>
            <p className="text-gray-600 text-lg">
              Brindar una plataforma innovadora y confiable que facilite la gestión y administración de vehículos, 
              usuarios y servicios, ofreciendo soluciones rápidas y eficientes para nuestros clientes.
            </p>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://i.pinimg.com/736x/f7/39/27/f73927d889a935f6297910334f40d7f6.jpg" 
              alt="Misión" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Sección Visión */}
      <section className="py-20 px-6 md:px-20 bg-gray-100">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10 md:flex-row-reverse">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Nuestra Visión</h2>
            <p className="text-gray-600 text-lg">
              Ser la plataforma líder en gestión de vehículos en Latinoamérica, reconocida por su innovación, 
              facilidad de uso y compromiso con la satisfacción del cliente.
            </p>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://i.pinimg.com/736x/97/8a/d7/978ad77a09fe156b1baee5f6093f0fd1.jpg" 
              alt="Visión" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Sección Valores */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">Nuestros Valores</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Innovación</h3>
              <p className="text-gray-600">Siempre buscamos mejorar y ofrecer soluciones tecnológicas de vanguardia.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Confianza</h3>
              <p className="text-gray-600">Fomentamos relaciones sólidas con nuestros clientes mediante transparencia y responsabilidad.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Compromiso</h3>
              <p className="text-gray-600">Nos dedicamos a brindar el mejor servicio y soluciones rápidas a quienes nos eligen.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-16 text-center bg-grey-100">
        <h2 className="text-3xl font-bold text-grey-800 mb-4">
          ¡Únete a nuestra comunidad!
        </h2>
        <p className="text-red-700 mb-6 max-w-xl mx-auto">
          Descubre cómo motorR+ puede ayudarte a gestionar tu vehículo de manera sencilla y confiable.
        </p>
        <button className="bg-black-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-yellow-700 transition">
          Comenzar Ahora
        </button>
      </section>
    </div>
  );
}
