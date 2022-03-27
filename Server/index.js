import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";


const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }))  //setting the limit for body of html by encoding like images should not be greater then 30mb 
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true })) //for encoding the url  
app.use(cors()); //timestamp function that tells from where the request has send or come
const CONNECTION_URL = "mongodb+srv://socialnetwork:<password>@cluster0.czsk3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"  // connection of the mongodb database
const PORT = 5000;

mongoose.connect(CONNECTION_URL).then(() => {  //connecting to mongodatabase
    console.log(`server Running on ${PORT}`)
})
