const PortfolioUser=require("../models/PortfolioUser");
const jwt=require("jsonwebtoken");

const protect=async(req,res,next)=>{
    try {
        const {token}=req.cookies;
        if(!token)
        {
            return res.status(400).json({
                message:"Yor are not login,please login"
        })
        }
        const verified=jwt.verify(token,process.env.JWT_SECRET_KEY);
        const userdetail=await PortfolioUser.findById(verified._id);
        if(!userdetail)
        {
            return res.status(400).json({
                message:"No user found"
        })
        }
        req.PortfolioUser=userdetail;
        return next();
    } catch (error) {
        console.log("some error happening in authenication");
    }
}

module.exports=protect;