const express= require("express");
const router=express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'I am Get Request of products'
    })
})


router.post('/',(req,res,next)=>{
    res.status(200).json({
        message:'I am Post Request of products'
    })
})

router.get('/:productId',(req,res,next)=>{
    const id=req.params.productId;
    if(id=='special'){
        res.status(200).json({
            message: 'Your id is special',
            id: id
        })
    }else{
        res.status(200).json({
            message: 'You passed an ID'
        })
    }
})

router.patch('/:productId',(req,res,next)=>{
    res.status(200).json({
        message: 'Updated Product..!'
    })
})

router.delete('/:productId',(req,res,next)=>{
    res.status(200).json({
        message: 'Deleted Product..!'
    })
})

module.exports=router;