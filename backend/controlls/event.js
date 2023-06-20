const Event= require('../models/booking')
const HRS=require('../models/hr')

exports.addEvent=async(req,res,next)=>{
    try{
         const event= await Event.create(req.body)
         console.log(req.body)
        res.status(200).json({
            success:true,
            event

        })

    }catch(e){
        res.json({message:e.message})
    }
}

exports.hrMembers=async(req,res,next)=>{
    try{
         const hrMembers= await HRS.find()
         console.log(hrMembers)
        res.status(200).json({
            success:true,
            hrMembers

        })

    }catch(e){
        res.json({message:e.message})
    }
}