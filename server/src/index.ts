import http from "http";
import app from "./app";

const PORT = 8001;
const server = http.createServer(app);

const startServer = () => {
  server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
};

startServer();
