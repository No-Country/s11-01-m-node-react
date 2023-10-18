import express from "express"
import authRoutes from '../src/routes/auth.routes'
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/v1', authRoutes)


export default app
