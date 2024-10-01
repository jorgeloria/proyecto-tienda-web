function ExpirationDate({ mandatory = false }) {
  return (
    <div className="expiration-date half-size">
      <label>Fecha de vencimiento</label>
      <span>
        <input className="month" type="text" required={mandatory} />
        <input className="year" type="text" required={mandatory} />
      </span>
    </div>
  );
}

export default ExpirationDate;
