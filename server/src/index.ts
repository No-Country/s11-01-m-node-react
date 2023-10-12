import http from "http"
import app from "./app"

const PORT = 8000
const server = http.createServer(app)

const startServer = () => {
  server.listen(PORT, () => {
    console.log(`Server runnin on http://localhost:${PORT}`)
  })
}

startServer()
