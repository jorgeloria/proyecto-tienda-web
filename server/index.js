const express = require('express')
const app = express();
const cors = require('cors')

console.log(app)

app.use(cors()) 

app.listen(8080, ()=>{
    console.log('server listening on port 8080')
});

app.get('/', (req, res) => {
    res.send('Hello form our server!')
});