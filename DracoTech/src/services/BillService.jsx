import axios from "axios";

const BillService = {
    processPurchase: async function (value) {
        
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
        //const response = await axios.post("http://localhost:3001/bill/processPurchase", test);

        //const response = await axios.get("http://localhost:3001/bill/getBills", {params: {userId: 1}});
        const response = await axios.get("http://localhost:3001/bill/getBillById", {params: {billId: 26}});
        //TODO(importante): terminar servicio y redirección
        console.log(JSON.stringify(response.data, null, 2));
        return response;
    }
};

export default BillService;