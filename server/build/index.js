"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const app_1 = __importDefault(require("./app"));
const PORT = process.env.PORT || 3000;
const server = http_1.default.createServer(app_1.default);
const startServer = () => {
    server.listen({
        port: PORT,
        hostname: "0.0.0.0",
        listeningListener: () => {
            console.log(`Server running on http://localhost:${PORT}`);
        }
    });
};
startServer();
