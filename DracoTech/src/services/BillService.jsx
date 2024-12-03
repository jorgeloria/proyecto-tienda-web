import axios from "axios";

const BillService = {
    async getBills (userId) {
        try {
            const response = await axios.get(
                "http://localhost:3001/bill/getBills", {params: {userId: userId}}
            );

            const bills = await response.data;
            console.log("[BILL SERVICE] bills: ", bills);
            return bills;

        } catch (error) {
            console.error("Error en getBills:", error);
            throw error;
        }
    },

    async getBillById (billId) {
        try {
            const response = await axios.get(
                "http://localhost:3001/bill/getBillById", {params: {billId: billId}}
            );

            const bill = await response.data;
            return bill;

        } catch (error) {
            console.error("Error en getBillById:", error);
            throw error;
        }
    },

    processTransaction: async function (transaction) {
        try{
            console.log("Sending transaction " + JSON.stringify(transaction, null, 2))
            const response = await axios.post("http://localhost:8484/transaction", {
                transaction
            })
            console.log("Response from backend: " + JSON.stringify(response, null, 2))
            return response
        }catch(error){
            if (error.response) {
                console.log("Backend responded with an error:", JSON.stringify(error.response.data, null, 2));
                return error.response.data.message;
            } else {
                console.log("An error occurred:", error.message);
                return error.message;
            }
            return error.response.data.message;
        }
    },

    processPurchase: async function (value) {
        try {
            const response = await axios.post(
                "http://localhost:3001/bill/processPurchase", value
            );
            if (response.status != 200) {
                throw new Error("Error al procesar compra");
            }
            return "SUCCESS"
        } catch(error) {
            return error;
        }
        
        {
        //TODO(importante): Eliminar
        let objs = [];
		let p = {id: 19, quantity: 1};
		objs.push(p);
		p = {id: 10, quantity: 2};
		objs.push(p);		
		const shipData = {
            email: "fray.abrahams@ucr.ac.cr",
			name: "fray",
			lastName: "abrahams león",
			direction: "shi",
			province: "San Jose",
			city: "Aserri",
			region: "San Gabriel",
			phone: 12344321
        };	
        const test = {
            userId : 1,
            products: objs,
            shipData: shipData
        };


        // estas lineas son para probar las respuestas
        const response = await axios.post("http://localhost:3001/bill/processPurchase", test);

        //const response = await axios.get("http://localhost:3001/bill/getBills", {params: {userId: 1}});
        //const response = await axios.get("http://localhost:3001/bill/getBillById", {params: {billId: 26}});
        //TODO(importante): terminar servicio y redirección
        console.log(JSON.stringify(response.data, null, 2));
        return response;
        }
    }
};

export default BillService;