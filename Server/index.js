import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";


const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true }))  //setting the limit for body of html by encoding like images should not be greater then 30mb 
app.use(bodyParser.urlencoded({limit : "30mb", extended: true})) //for encoding the url  
app.use(cors()); //timestamp function that tells from where the request has send or come
