import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./config/database.js";
import router from "./routes/index.js";
import {prediksiLstm,prediksiRF,prediksiTestingLstm, prediksiTestingRF} from "./models/dataModel.js";
dotenv.config()
const app = express();
try {
    await db.authenticate();
    console.log("database connected");
    await prediksiRF.sync()
    await prediksiTestingRF.sync()
} catch (error) {
    console.error(error)
}

app.use(cors({credentials:true, origin:"http://localhost:5173"}))
app.use(cookieParser())
app.use(express.json());
app.use(router);


app.listen(5000, () => console.log('running serting to port 5000'));