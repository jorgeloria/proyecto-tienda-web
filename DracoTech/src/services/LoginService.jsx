import axios from "axios";

const LoginService = {
    doLogin: function(value) {
        
        const response = axios.post("http://localhost:3001/user/login",
          value
        )

        return response;
    },

    secondValidationMethod: function(value) {
        //inspect the value
    }

};

export default LoginService;