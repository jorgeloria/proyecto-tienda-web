const LoginService = {
    doLogin: function(value) {
        debugger
        fetch('http://localhost:3001/login', {
            method: "POST",
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify(value)
          })
    },

    secondValidationMethod: function(value) {
        //inspect the value
    }

};

export default LoginService;