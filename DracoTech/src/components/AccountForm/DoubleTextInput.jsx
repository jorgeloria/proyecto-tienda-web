function DoubleTextInput({
  labelLeft,
  placeholderLeft = "",
  mandatoryLeft = false,
  labelRight,
  placeholderRight = "",
  mandatoryRight = false,
}) {
  return (
    <>
      <div>
        <label>{labelLeft}</label>
        <input placeholder={placeholderLeft} required={mandatoryLeft} />
      </div>
      <div>
        <label>{labelRight}</label>
        <input placeholder={placeholderRight} required={mandatoryRight} />
      </div>
    </>
  );
}

export default DoubleTextInput;
