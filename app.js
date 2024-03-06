const express=require('express')
const app=express()

const productRoute=require("./api/routes/products")
const orderRoute=require("./api/routes/orders")

app.use('/products',productRoute);
app.use('/orders',orderRoute)

// app.use((req,res,next)=>{
//     res.status(200).json({
//         message: "NO ERROR Nithin...!"
//     })
// })

module.exports=app;