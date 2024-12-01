
const CheckoutField = ({id, title, value, placeholder, onChange, maxLength, type = "text", error, required = false}) => {
  return (
    <div className="row" >
    <label htmlFor="username">{title} {required ? "*" : ""}</label>
        <input
        id={id}
        className={` input ${error === "" ? "input" : "input-error"} input input-bordered w-full bg-Footer_color`}
        type={type}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        placeholder={placeholder}
        />
        {
            error === "" ? "" :
            <div className="label-text-alt text-red-500">
                {error}
            </div>
        }
    </div>
  );
}

export default CheckoutField;