const contactrouter = require("express").Router();
const {sendmessage}=require("../controllers/ContactUs");
contactrouter.post("/sendmessage",sendmessage);

module.exports = contactrouter;