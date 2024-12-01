const phoneFormat = "8888 - 8888";
const cardNumberFormat = "1234 1234 1234 1234";
const cvcFormat = "123";
const expiryDateFormat = "MM / YY";

const verifyEmpty = (value, name) => {
  if(value.length === 0) {
    return "El campo de " + name + " está vacío.";
  }
  return "";
}

const verifyEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailRegex.test(email)) {
    return "Por favor, ingresa un correo electrónico válido."
  }
  return "";
}

const verifyPhone = (phone) => {
  if (phone.length > 0 && phone.length !== phoneFormat.length) {
    return "Tu número de teléfono está incompleto."
  }
  return "";
}

const verifyCardNumber = (cardNumber) => {
  // ? Bin check in here???
  if (cardNumber.length !== cardNumberFormat.length) {
    return "Tu número de tarjeta está incompleto."
  }
  return "";
}

const verifyCVC = (cvc) => {
  if (cvc.length !== cvcFormat.length) {
    return "Tu código de seguridad está incompleto.";
  }
  return "";
}

const verifyExpiryDate = (expiryDate) => {
  if (expiryDate.length !== expiryDateFormat.length) {
    return "Tu fecha de vencimiento está incompleta.";
  }
  return "";
}

export {verifyEmpty, verifyEmail, verifyPhone, verifyCardNumber, verifyCVC, verifyExpiryDate};