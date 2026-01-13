import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function FooterTiendaMotos() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300">
      {/* Sección principal del footer */}
      <div className="container mx-auto px-6 py-12 flex flex-wrap justify-between">
        
        {/* Columna 1: Sobre nosotros */}
        <div className="w-full md:w-1/2 lg:w-1/4 mb-8 lg:mb-0">
          <h3 className="text-white text-xl font-bold mb-4 flex items-center">
            <span className="text-red-500 text-2xl mr-2">🏍️</span>
            MotoStore
          </h3>
          <p className="text-sm mb-4 leading-relaxed">
            Tu tienda de confianza para motos, accesorios y repuestos. Más de 15 años de experiencia en el mercado ecuatoriano.
          </p>
          <div className="flex space-x-3">
            <a href="#" className="bg-gray-800 hover:bg-red-600 p-2 rounded-full transition-colors duration-300">
              <Facebook size={20} />
            </a>
            <a href="#" className="bg-gray-800 hover:bg-red-600 p-2 rounded-full transition-colors duration-300">
              <Instagram size={20} />
            </a>
            <a href="#" className="bg-gray-800 hover:bg-red-600 p-2 rounded-full transition-colors duration-300">
              <Twitter size={20} />
            </a>
            <a href="#" className="bg-gray-800 hover:bg-red-600 p-2 rounded-full transition-colors duration-300">
              <Youtube size={20} />
            </a>
          </div>
        </div>

        {/* Columna 2: otra sección si quieres agregar */}
        {/* <div className="w-full md:w-1/2 lg:w-1/4 mb-8 lg:mb-0">...</div> */}

        {/* Columna de contacto (pegada a la derecha) */}
        <div className="w-full md:w-1/2 lg:w-1/4 ml-auto flex flex-col items-end">
          <h3 className="text-white text-lg font-bold mb-4 text-right">Contáctanos</h3>
          <ul className="space-y-3 mb-4 text-right">
            <li className="flex items-start justify-end">
              <MapPin size={18} className="ml-3 mt-1 text-red-500 flex-shrink-0" />
              <span className="text-sm">Av. Mariana de Jesús, Quito 170129, Ecuador</span>
            </li>
            <li className="flex items-center justify-end">
              <Phone size={18} className="ml-3 text-red-500 flex-shrink-0" />
              <span className="text-sm">+593 99 123 4567</span>
            </li>
            <li className="flex items-center justify-end">
              <Mail size={18} className="ml-3 text-red-500 flex-shrink-0" />
              <span className="text-sm">info@motostore.ec</span>
            </li>
            <li className="flex items-start justify-end">
              <Clock size={18} className="ml-3 mt-1 text-red-500 flex-shrink-0" />
              <div className="text-sm">
                <p>Lun - Vie: 9:00 - 18:00</p>
                <p>Sáb: 9:00 - 14:00</p>
              </div>
            </li>
          </ul>

          {/* Google Maps */}
          <div className="rounded-lg overflow-hidden w-full md:w-80">
            <iframe
              title="Ubicación MotoStore"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.123456789!2d-78.516111!3d-0.180833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59f1234567890%3A0xabcdef1234567890!2sAv.%20Mariana%20de%20Jes%C3%BAs%20170-129%2C%20Quito%2C%20Ecuador!5e0!3m2!1ses!2sec!4v1680000000000!5m2!1ses!2sec"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-gray-800 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-white text-lg font-bold mb-1">Suscríbete a nuestro boletín</h3>
              <p className="text-sm text-gray-400">Recibe ofertas exclusivas y novedades</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="px-4 py-2 w-full md:w-80 rounded-l-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-r-lg font-semibold transition-colors duration-300">
                Suscribirse
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Métodos de pago */}
      <div className="bg-gray-850 py-6 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-3">
            <p className="text-sm text-gray-400 mb-3">Métodos de pago aceptados</p>
            <div className="flex justify-center items-center space-x-4 flex-wrap">
              <div className="bg-white px-4 py-2 rounded">
                <span className="text-blue-600 font-bold text-sm">VISA</span>
              </div>
              <div className="bg-white px-4 py-2 rounded">
                <span className="text-red-600 font-bold text-sm">Mastercard</span>
              </div>
              <div className="bg-white px-4 py-2 rounded">
                <span className="text-blue-800 font-bold text-sm">PayPal</span>
              </div>
              <div className="bg-white px-4 py-2 rounded">
                <span className="text-gray-700 font-bold text-sm">Transferencia</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-black py-4">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-gray-500">
            © 2026 MotoStore Ecuador. Todos los derechos reservados. |
            <a href="#" className="hover:text-red-500 ml-1">Política de Privacidad</a> |
            <a href="#" className="hover:text-red-500 ml-1">Aviso Legal</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
