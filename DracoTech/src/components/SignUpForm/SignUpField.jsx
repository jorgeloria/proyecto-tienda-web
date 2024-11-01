
import styles from './SignUpForm.module.css'
const SignUpField = ({title, value, onChange, type = "text", error, required = false}) => {
  return (
    <div className="row" >
    <label htmlFor="username">{title} {required ? "*" : ""}</label>
        <input
        className={` input ${error === "" ? "input" : "input-error"} input input-bordered w-full bg-Footer_color`}
        type={type}
        value={value}
        onChange={onChange}
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

export default SignUpField;