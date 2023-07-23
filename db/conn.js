const mongoose=require("mongoose");
mongoose.connect(process.env.MONGO_URL,{

}).then(()=>{
    console.log("mongodb connection established");
}).catch((err)=>{
    // console.log(err);
    console.log("mongodb connection failed to established");
})