package main

import (
	"encoding/json"
	"errors"
	"fmt"
	"net/http"
)

// Transaccion contiene los datos para procesar una transacción
type Transaccion struct {
	Tarjeta         string `json:"tarjeta"`
	FechaExpiracion string `json:"fechaExpiracion"`
	CVC             string `json:"cvc"`
	Moneda          string `json:"moneda"`
}

// Respuesta contiene el resultado de la transacción
type Respuesta struct {
	Aprobada bool   `json:"aprobada"`
	Mensaje  string `json:"mensaje"`
}

// ProcesarTransaccion procesa la transacción y retorna un flag indicando aprobación o rechazo
func ProcesarTransaccion(tx Transaccion) (bool, error) {
	if len(tx.Tarjeta) != 16 {
		return false, errors.New("el número de tarjeta debe tener 16 dígitos")
	}

	bin := tx.Tarjeta[:6]
	if !ValidarBIN(bin) {
		return false, errors.New("el BIN de la tarjeta no es válido")
	}

	if err := ValidarFechaExpiracion(tx.FechaExpiracion); err != nil {
		return false, err
	}

	if err := ValidarCVC(tx.CVC, tx.Tarjeta); err != nil {
		return false, err
	}

	if err := ValidarMoneda(tx.Moneda); err != nil {
		return false, err
	}

	return true, nil
}

// Controlador para manejar las solicitudes HTTP
func ControladorTransaccion(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Método no permitido", http.StatusMethodNotAllowed)
		return
	}

	var tx Transaccion
	if err := json.NewDecoder(r.Body).Decode(&tx); err != nil {
		http.Error(w, "Error en el formato de la solicitud", http.StatusBadRequest)
		return
	}

	aprobada, err := ProcesarTransaccion(tx)
	respuesta := Respuesta{
		Aprobada: aprobada,
	}

	if err != nil {
		respuesta.Mensaje = err.Error()
		w.WriteHeader(http.StatusBadRequest)
	} else {
		respuesta.Mensaje = "Transacción aprobada"
		w.WriteHeader(http.StatusOK)
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(respuesta)
}

func main() {
	http.HandleFunc("/transaccion", ControladorTransaccion)

	fmt.Println("Servidor iniciado en el puerto 8383")
	if err := http.ListenAndServe(":8383", nil); err != nil {
		fmt.Printf("Error iniciando el servidor: %s\n", err)
	}
}
