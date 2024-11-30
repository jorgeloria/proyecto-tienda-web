import React from 'react'

export default function ShippingInformation() {
  return (
    <div>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
			<div>
				<label className="block mb-1">Correo Electrónico</label>
				<input id='email' type="email" className="w-full p-2 rounded bg-Footer_color" required />
			</div>
			<div>
				<label className="block mb-1">Nombre</label>
				<input id='Nombre' type="text" className="w-full p-2 rounded bg-Footer_color" required />
			</div>
			<div>
				<label className="block mb-1">Apellido</label>
				<input id='Apellido' type="text" className="w-full p-2 rounded bg-Footer_color" required />
			</div>
			<div>
				<label className="block mb-1">Dirección</label>
				<input id='Direction' type="text" className="w-full p-2 rounded bg-Footer_color" required />
			</div>
			<div>
				<label className="block mb-1">Provincia</label>
				<input id='Provincia' type="text" className="w-full p-2 rounded bg-Footer_color" required />
			</div>
			<div>
				<label className="block mb-1">Ciudad</label>
				<input id='Ciudad' type="text" className="w-full p-2 rounded bg-Footer_color" required />
			</div>
			<div>
				<label className="block mb-1">Región</label>
				<input id='Region' type="text" className="w-full p-2 rounded bg-Footer_color" required />
			</div>
			<div>
				<label className="block mb-1">Teléfono</label>
				<input id='Telefono' type="text" className="w-full p-2 rounded bg-Footer_color" required />
			</div>
		</form>
	</div>
  )
}
