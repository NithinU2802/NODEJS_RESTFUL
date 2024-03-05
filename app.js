const express=require('express')
const app=express()

const productRoute=require("./api/routes/products")

app.use('/products',productRoute);

app.use((req,res,next)=>{
    res.status(200).json({
        message: "NO ERROR Nithin...!"
    })
})

module.exports=app;