import SingleTextInput from "../components/AccountForm/SigleTextInput";
import DoubleTextInput from "../components/AccountForm/DoubleTextInput";

import "../styles/EditAccount.css";

function EditAccount() {
  return (
    <div className="edit-account">
      <form className="">
        {/*//TODO(Fray): single-column cuando para responsividad */}
        <span className="side-container-wrapper">
          <div className="side-container">
            <div className="section">
              <h2>Datos personales</h2>
              <SingleTextInput label={"Correo electrónico"} mandatory={true} />
              <DoubleTextInput
                labelLeft={"Nombre"}
                mandatoryLeft={true}
                labelRight={"Apellido"}
                mandatoryRight={true}
              />
              <DoubleTextInput
                labelLeft={"Teléfono"}
                labelRight={"Teléfono alternativo"}
              />
            </div>

            <div className="section">
              <h2>Dirección de envío</h2>
              <DoubleTextInput labelLeft={"Provincia"} labelRight={"Ciudad"} />
              <SingleTextInput label={"Dirección"} />
              <SingleTextInput label={""} />
              <SingleTextInput label={"Código postal"} />
            </div>
          </div>

          <div className="side-container">
            <div className="section">
              <h2>Datos de la tarjeta</h2>
              <SingleTextInput label={"Número de tarjeta"} />
              <SingleTextInput label={"Nombre en la tarjeta"} />
              {/*//TODO(Fray): Fecha de vencimiento*/}
            </div>

            <div className="section">
              <h2>Dirección de facturación</h2>
              <SingleTextInput label={"Nombre y apellidos"} />
              <DoubleTextInput
                labelLeft={"País"}
                labelRight={"Provincia/Estado/Región"}
              />
              <DoubleTextInput
                labelLeft={"Ciudad"}
                labelRight={"Código postal"}
              />
              <SingleTextInput label={"Dirección"} />
              <SingleTextInput label={""} />
            </div>
          </div>
        </span>
        <button
          type="submit"
          className="btn focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-2xl w-full sm:w-auto px-5 py-2.5 text-center hover:text-black"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default EditAccount;
