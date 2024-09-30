function SingleTextInput({
  label,
  placeholder = "",
  mandatory = false,
  halfSize = false,
}) {
  return (
    <>
      {{ halfSize } ? (
        <div className="half-size">
          <label>{label}</label>
          <input type="text" placeholder={placeholder} required={mandatory} />
        </div>
      ) : (
        <div className="full-size">
          <label>{label}</label>
          <input type="text" placeholder={placeholder} required={mandatory} />
        </div>
      )}
    </>
  );
}

export default SingleTextInput;
