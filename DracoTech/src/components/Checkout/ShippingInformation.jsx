import React from 'react'
import CheckoutField from './CheckoutField'

export default function ShippingInformation({shippingData, setShippingData,shippingErrors}) {
	const formatPhoneNumber = (value) => {
		const digits = value.replace(/\D/g, "");
		const formatted = digits.replace(/(\d{4})(\d{0,4})/, (_, part1, part2) =>
      part2 ? `${part1} - ${part2}` : part1
    );

		return formatted;
	}

  return (
    <div>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<CheckoutField
					id={'email'}
					title={"Correo Electrónico"}
					type={'email'}
					value={shippingData.email}
					error={shippingErrors.emailError}
					onChange={(e) => setShippingData({...shippingData, email: e.target.value})}
					required
				/>
				<CheckoutField
					id={'nombre'}
					title={"Nombre"}
					value={shippingData.name}
					error={shippingErrors.nameError}
					onChange={(e) => setShippingData({...shippingData, name: e.target.value})}
					required
				/>
				<CheckoutField
					id={'apellido'}
					title={"Apellido"}
					value={shippingData.lastName}
					error={shippingErrors.lastNameError}
					onChange={(e) => setShippingData({...shippingData, lastName: e.target.value})}
					required
				/>
				<CheckoutField
					id={'direccion'}
					title={"Dirección"}
					value={shippingData.address}
					error={shippingErrors.addressError}
					onChange={(e) => setShippingData({...shippingData, address: e.target.value})}
					required
				/>
				<CheckoutField
					id={'provincia'}
					title={"Provincia"}
					value={shippingData.province}
					error={shippingErrors.provinceError}
					onChange={(e) => setShippingData({...shippingData, province: e.target.value})}
					required
				/>
				<CheckoutField
					id={'city'}
					title={"Ciudad"}
					value={shippingData.city}
					error={shippingErrors.cityError}
					onChange={(e) => setShippingData({...shippingData, city: e.target.value})}
					required
				/>
				<CheckoutField
					id={'region'}
					title={"Región"}
					value={shippingData.region}
					error={shippingErrors.regionError}
					onChange={(e) => setShippingData({...shippingData, region: e.target.value})}
				/>
				<CheckoutField
					id={'telefono'}
					title={"Teléfono"}
					value={shippingData.phone}
					error={shippingErrors.phoneError}
					maxLength={11}
					onChange={(e) => setShippingData({...shippingData, phone: formatPhoneNumber(e.target.value)})}
				/>
			</form>
		</div>
  )
}
