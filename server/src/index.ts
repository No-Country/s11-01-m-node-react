import http from "http";
import app from "./app";

const PORT = process.env.PORT || 3000;
const server = http.createServer(app);

const startServer = () => {
  server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  }
  )
};

startServer();
