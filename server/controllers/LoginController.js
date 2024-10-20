const testFunction = async (req, res) => {
    console.log("to get user credentials and info")



    res.send("OK")
  }

const doLogin = async (req, res) =>{
    res.send("doLogin OK")
};
 

  export {testFunction, doLogin}