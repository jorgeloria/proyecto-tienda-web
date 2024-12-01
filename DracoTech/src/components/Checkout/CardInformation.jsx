import React from 'react'
import CheckoutField from './CheckoutField'

export default function CardInformation({cardData, setCardData, cardDataErrors}) {
	const formatCardNumber = (value) => {
		// Remove all non-numeric characters
		const digits = value.replace(/\D/g, '');

		// Format as 1234 1234 1234 1234
		const formatted = digits.replace(/(\d{4})(?=\d)/g, '$1 ');

		return formatted.trim();
	}

	const formatExpiryDate = (value) => {
		const digits = value.replace(/\D/g, '');

		// Format as MM / YY
		const formatted = digits.replace(/^(\d{0,2})(\d{0,2})$/, (_, month, year) => {
			if (year) return `${month} / ${year}`;
			return month;
		});

		return formatted;
	}

  return (
    <>
			<form className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<CheckoutField
					id={"cardNumber"}
					title={"Número de Tarjeta"}
					value={cardData.cardNumber}
					error={cardDataErrors.cardNumberError}
					onChange={(e) => setCardData({...cardData, cardNumber: formatCardNumber(e.target.value)})}
					required
					maxLength={19}
					placeholder={"1234 1234 1234 1234"}
				/>
				<CheckoutField
					id={"expiryDate"}
					title={"Fecha de Vencimiento"}
					value={cardData.expiryDate}
					error={cardDataErrors.expiryDateError}
					onChange={(e) => setCardData({...cardData, expiryDate: formatExpiryDate(e.target.value)})}
					required
					placeholder={"MM / YY"}
					maxLength={7}
				/>
				<CheckoutField
					id={"cvc"}
					title={"Código de Seguridad"}
					value={cardData.cvc}
					error={cardDataErrors.cvcError}
					onChange={(e) => setCardData({...cardData, cvc: e.target.value.replace(/\D/g, "")})}
					required
					placeholder={"CVC"}
					maxLength={3}
				/>
				<CheckoutField
					id={"cardName"}
					title={"Nombre en la Tarjeta"}
					value={cardData.cardName}
					error={cardDataErrors.cardNameError}
					onChange={(e) => setCardData({...cardData, cardName: e.target.value})}
					required
					placeholder={"Nombre Completo"}
				/>
			</form>
    </>
  )
}
