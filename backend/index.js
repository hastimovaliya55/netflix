import express from 'express';
import dotenv from 'dotenv';
import database from './util/database.js';
import userroute from './rotes/userroute.js';
import cookieParser from 'cookie-parser';
import cors from "cors";
const app = express();
const port = 8080;

database();
// const corsOptions = {
//     origin:'http://localhost:3000',
//     credentials:true
// }
// app.use(cors(corsOptions));

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cookieParser());
app.use("/api/v1/user" , userroute);


app.listen(port , () =>
    {
        console.log("server listen at 8080 port");
    });
