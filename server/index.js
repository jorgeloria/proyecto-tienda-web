import express from 'express'
import cors from 'cors'

// import routes
import testRoutes from './routes/testRoutes.js'
import LoginRoutes from './routes/LoginRoutes.js'

const PORT  = 3001
const CLIENT_PORT = 5173;

const app = express()

app.use(cors({
    origin: 'http://localhost:' + CLIENT_PORT
}))

app.use('/testing', testRoutes)

app.use('/login',LoginRoutes)

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`)
})
