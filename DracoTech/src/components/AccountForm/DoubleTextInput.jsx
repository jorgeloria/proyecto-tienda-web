import SingleTextInput from "./SigleTextInput";

function DoubleTextInput({
  labelLeft,
  placeholderLeft = "",
  mandatoryLeft = false,
  labelRight,
  placeholderRight = "",
  mandatoryRight = false,
}) {
  return (
    <span className="double-text-input">
      <SingleTextInput
        label={labelLeft}
        placeholder={placeholderLeft}
        mandatory={mandatoryLeft}
        halfSize={true}
      />
      <SingleTextInput
        label={labelRight}
        placeholder={placeholderRight}
        mandatory={mandatoryRight}
        halfSize={true}
      />
    </span>
  );
}

export default DoubleTextInput;
