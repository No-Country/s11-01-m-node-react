import cors from "cors";
import express from "express";
import router from "./routes/index";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("v1", router);
export default app;
