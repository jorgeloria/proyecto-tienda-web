import React from "react";
import "boxicons";

const Footer = () => {
  return (
    <footer className="sm:grid-cols-1 xl:grid-cols-3 xl:grid gap-8 bg-Footer_color text-base-content p-10">
      <aside className="flex flex-col items-center text-justify">
        <img
          src="src/assets/PrimaryLogoVect.svg"
          width="300"
          height="50"
          alt="Logo de DracoTech"
        />
        <p className="text-gray-100 text-center mt-2">
          Copyright © DracoTech {new Date().getFullYear()} -<br /> Todos los
          derechos reservados
        </p>
      </aside>
      <nav className="xl:items-start sm:flex flex-col sm:items-center sm:text-justify">
        <h2 className="text-gray-50 text-2xl py-5 font-bold">Ubicación</h2>
        <p className="text-gray-300 text-sm">
          Direccion: Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Quos dignissimos earum eligendi quisquam, accusamus rerum, aliquid quo
          neque esse numquam in cum harum incidunt maiores voluptatibus
          repudiandae molestiae animi nemo?
        </p>
        <h2 className="text-gray-50 text-2xl py-5 font-bold">Correo</h2>
        <p className="text-gray-300 text-sm">DracoTech@gamil.com</p>
        <h2 className="text-gray-50 text-2xl py-5 font-bold">Teléfono</h2>
        <p className="text-gray-300 text-sm">+506 1234-5678</p>
        <p className="text-gray-300 text-sm">+506 4321-8765</p>
      </nav>
      <nav className="xl:items-start sm:flex flex-col sm:items-center sm:text-justify">
        <h2 className="text-gray-50 text-2xl py-5 font-bold">Redes sociales</h2>
        <div className="flex space-x-4 mb-6">
          <a
            href="https://google.com"
            className=" bg-Card_color p-4 rounded-md text-white transition-colors duration-300 hover:bg-Secundary_color"
            target="_blank"
          >
            <box-icon name="facebook" type="logo" color="#ffffff"></box-icon>
          </a>
          <a
            href="https://google.com"
            className=" bg-Card_color p-4 rounded-md text-white transition-colors duration-300 hover:bg-Secundary_color"
            target="_blank"
          >
            <box-icon name="instagram" type="logo" color="#ffffff"></box-icon>
          </a>
          <a
            href="https://google.com"
            className=" bg-Card_color p-4 rounded-md text-white transition-colors duration-300 hover:bg-Secundary_color"
            target="_blank"
          >
            <box-icon name="whatsapp" type="logo" color="#ffffff"></box-icon>
          </a>
        </div>
        <h2 className="text-gray-50 text-2xl py-5 font-bold">Horarios</h2>
        <p className="text-gray-300 text-sm">Lunes a viernes</p>
        <p className="text-gray-300 text-sm">9:00 am - 7:00 am</p>
      </nav>
    </footer>
  );
};

export default Footer;
