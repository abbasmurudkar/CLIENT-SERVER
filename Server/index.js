import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

const app = express(); //THE WHOLE SERVER
const PORT = 5000; //the port 5000 will work for database
// MIDDLEWARE CORS BODY PARSER
//Middileware is the function that invoke by express routing layer becasue we are using express using app
const customMiddleware = (req, res,next)=>{
    console.log("Middle ware executed!!!")
    next() 
}
// app.use(customMiddleware)
//USING GET METHOD INSTEAD OF POST
app.get("/home",(req,res)=>{
    console.log("hellow from localhost")
    res.send("HELLO I AM RESPONSE FROM SERVER") //it will show on browser
})
app.get("/login",customMiddleware,(req,res)=>{
    console.log("hello from login page")
    res.send("HELLO I AM RESPONSE FROM SERVER") //it will show on browser
})
app.listen(PORT,()=>{ //which port number should response go and what task should it perform after listening on the port
    console.log("server is running on:",PORT)//it will show on terminal
})  



app.use(bodyParser.json({ limit: "30mb", extended: true }))  //setting the limit for body of html by encoding like images should not be greater then 30mb 
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true })) //for encoding the url  
app.use(cors()); //timestamp function that tells from where the request has send or come
const CONNECTION_URL = "mongodb+srv://socialnetwork:<password>@cluster0.czsk3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"  // connection of the mongodb database
// And we have use nodemon for refreshment of the page automatically so nodemon will execute 
//it automatically by updating the app and error and if error will occure it will show in terminal
mongoose.connect(CONNECTION_URL).then(() => {  //connecting to mongodatabase
    console.log(`server Running on ${PORT}`)
})


//Get Method: data goes to the url and it will show on url like https://www.google.com/data= ashok   get is faster than post
//Post Method: post will not show the data on the url like https://www.google.com post is slower than get