import axios from "axios";

const LoginService = {
	doLogin: async function(value) {
		try {
			const response = await axios.post("http://localhost:3001/user/login", value);
			
			
			if (response.data.token) {
				localStorage.setItem("authToken", response.data.token);
			}

			return response;
		} catch (error) {
			console.error("Login error:", error);
			throw error;
		}
	},

	isActive: async function(value) {
		try {
		console.log(value)
		const tokenInfo ={"token": value}
		const response = await axios.post("http://localhost:3001/user/is-active", tokenInfo);
		console.log("verighjkghjkgficado")
		if(response.status === 200) {
			console.log("verificado")
			return true;
		}
		return false;
	} catch (error) {
		console.error("Login error:", error);
		throw error;
	}
	},

	secondValidationMethod: function(value) {
		// Inspect the value
	},

	getToken: function() {
		return localStorage.getItem("authToken");
	}
};

export default LoginService;