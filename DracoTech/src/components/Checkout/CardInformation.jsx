import React from 'react'

export default function CardInformation() {
  return (
    <>
			<form className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div>
					<label className="block mb-1">Número de Tarjeta</label>
					<input type="text" className="w-full p-2 rounded bg-Footer_color" required />
				</div>
				<div>
					<label className="block mb-1">Fecha de Vencimiento</label>
					<input type="text" className="w-full p-2 rounded bg-Footer_color" required />
				</div>
				<div>
					<label className="block mb-1">Código de Seguridad</label>
					<input type="text" className="w-full p-2 rounded bg-Footer_color" required />
				</div>
				<div>
					<label className="block mb-1">Nombre en la Tarjeta</label>
					<input type="text" className="w-full p-2 rounded bg-Footer_color" required />
				</div>
			</form>
    </>
  )
}
