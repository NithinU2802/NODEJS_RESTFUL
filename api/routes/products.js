const express= require("express");
const router=express.Router();

router.get('/',(req,res,next)=>{
    res.status(100).json({
        message:'I am Get Request of products'
    })
})


router.post('/',(req,res,next)=>{
    res.status(100).json({
        message:'I am Post Request of products'
    })
})

module.exports=router;