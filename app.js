const express=require("express");
const app=express();
const mongoose=require("mongoose");
const cors=require("cors");
const path=require("path");
const bodyParser=require("body-parser");

const route=require("./routes/route");

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/contactlist');

//on connection
mongoose.connection.on("connected",()=>{
    console.log("connection stablished");
})

mongoose.connection.on("error",(err)=>{
    if(err){
        console.log("error in db connection",err);
    }
})

const port=5000;
//adding middleware
app.use(cors());
app.use(bodyParser.json());

//static file
app.use(express.static(path.join(__dirname,'public')));

//for using route
app.use("/api",route);

//testing server
app.get("/test",(req,res)=>{
    console.log("harsha");
    res.send("harsha")

});

app.listen(port,()=>{
    console.log(`server is runnning at ${port}`)
})