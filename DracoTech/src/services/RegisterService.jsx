import axios from "axios";

const RegisterUser = async (data) => {
  try {
    console.log("Registering " + data.name + ", " + data.email)
      const response = await axios.post("http://localhost:3001/user/register",
          {
              name: data.name,
              email: data.email,
              password: data.password
          }
      )

      console.log("Succeded")
      return "SUCCESS"
  } catch(error) {
      return error
  }
}

export default RegisterUser;