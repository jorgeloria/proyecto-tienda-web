const LoginService = {
    doLogin: function(value) {
        let result = fetch('http://localhost:3001/user/login', {
            method: "POST",
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify(value)
          }
        );
        return result;
    },

    secondValidationMethod: function(value) {
        //inspect the value
    }

};

export default LoginService;