const express=require("express");
const app=express();
const cookieParser=require("cookie-parser");
const bodyParser=require("body-parser");
const cors=require("cors");
// const cors=require("cors");
// const UserRoute=require("./routes/UserRoute");
// require env files
require("dotenv").config();

// require connection mongo db
require("./db/conn");

const port=process.env.PORT||4000;
const path=require("path");
app.use(express.static(path.join(__dirname, 'client', 'build')));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
})
// using middlewares
app.use(express.json({
    limit: '50mb'
  }));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/api/user',require('./routes/UserRoute'));
app.use('/api/contact',require('./routes/ContactRoute'));


app.use(
    cors({
      origin: ["http://localhost:3000"],
      credentials: true,
      methods: ["GET", "POST"]
    })
  );


app.get("/",(req,res)=>{
    res.send("home page");
})

app.listen(port,()=>{
    console.log(`server is starting at port no. ${port}`);
})