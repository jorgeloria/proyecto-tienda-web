import axios from "axios"

const LogoutService = {

  doLogout: async function() {
    const authToken = localStorage.getItem("authToken")
    const response = await axios.post("http://localhost:3001/user/logout",
      {},
      {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      }
    )
    if(response.status === 200) {
      localStorage.removeItem("authToken")
      console.log("Token successfully removed")
    }
    return response;
  }
}

export default LogoutService