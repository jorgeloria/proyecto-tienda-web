package main

import (
	"errors"
	// "fmt"
	// "regexp"
	"strconv"
	"strings"
	"time"
)

// BancoBINs contiene un ejemplo de BINs válidos para bancos en Costa Rica
var BancoBINs = []string{
	"123456", // Ejemplo de BIN válido
	"654321", // Otro BIN válido
	"333111",
}

// Transaccion contiene los datos para procesar una transacción
// type Transaccion struct {
// 	Tarjeta       string
// 	FechaExpiracion string
// 	CVC           string
// 	Moneda        string
// }

// ValidarBIN valida si el BIN (primeros 6 dígitos) es válido
func ValidarBIN(bin string) bool {
	for _, valido := range BancoBINs {
		if bin == valido {
			return true
		}
	}
	return false
}

// ValidarFechaExpiracion valida que la fecha sea válida y al menos un mes adelante
func ValidarFechaExpiracion(fecha string) error {
	t, err := time.Parse("01/06", fecha)
	if err != nil {
		return errors.New("fecha de expiración inválida, debe ser MM/AA")
	}

	hoy := time.Now()
	if t.Before(hoy.AddDate(0, 1, 0)) {
		return errors.New("la tarjeta está vencida o vence en menos de un mes")
	}
	return nil
}

// ValidarCVC valida que el CVC tenga el formato correcto según la tarjeta
func ValidarCVC(cvc, tarjeta string) error {
	if strings.HasPrefix(tarjeta, "3") { // American Express
		if len(cvc) != 4 {
			return errors.New("CVC inválido, debe ser de 4 dígitos para American Express")
		}
	} else { // Visa o MasterCard
		if len(cvc) != 3 {
			return errors.New("CVC inválido, debe ser de 3 dígitos para Visa o MasterCard")
		}
	}
	if _, err := strconv.Atoi(cvc); err != nil {
		return errors.New("CVC debe contener solo números")
	}
	return nil
}

// ValidarMoneda verifica que la moneda sea válida (colones o dólares)
func ValidarMoneda(moneda string) error {
	if moneda != "colones" && moneda != "dólares" {
		return errors.New("moneda inválida, debe ser 'colones' o 'dólares'")
	}
	return nil
}
