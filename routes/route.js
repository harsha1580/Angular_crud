const express=require("express");
const router=express.Router();

//retriving data
router.get("/contacts",(req,res,next)=>{
    res.send("get data");
});

//adding data
router.post("/contacts",(req,res,next)=>{
    
})

//delete data
router.delete("/contacts/:id",(req,res,next)=>{
    
})

module.exports=router;