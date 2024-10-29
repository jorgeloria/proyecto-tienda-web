import React from 'react'

export default function ShippingInformation() {
  return (
    <div>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div>
					<label className="block mb-1">Correo Electrónico</label>
					<input type="email" className="w-full p-2 rounded bg-Footer_color" required />
				</div>
				<div>
					<label className="block mb-1">Nombre</label>
					<input type="text" className="w-full p-2 rounded bg-Footer_color" required />
				</div>
				<div>
					<label className="block mb-1">Apellido *</label>
					<input type="text" className="w-full p-2 rounded bg-Footer_color" required />
				</div>
				<div>
					<label className="block mb-1">Dirección</label>
					<input type="text" className="w-full p-2 rounded bg-Footer_color" required />
				</div>
				<div>
					<label className="block mb-1">Provincia</label>
					<input type="text" className="w-full p-2 rounded bg-Footer_color" required />
				</div>
				<div>
					<label className="block mb-1">Ciudad</label>
					<input type="text" className="w-full p-2 rounded bg-Footer_color" required />
				</div>
				<div>
					<label className="block mb-1">Región</label>
					<input type="text" className="w-full p-2 rounded bg-Footer_color" required />
				</div>
				<div>
					<label className="block mb-1">Teléfono</label>
					<input type="text" className="w-full p-2 rounded bg-Footer_color" required />
				</div>
			</form>
		</div>
  )
}
