import express from 'express'
import cors from 'cors'

// import routes
import testRoutes from './routes/testRoutes.js'

const PORT  = 8080

const app = express()

app.use(cors({
    origin: 'http://localhost:5173'
}))

app.use('/testing', testRoutes)

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`)
})
