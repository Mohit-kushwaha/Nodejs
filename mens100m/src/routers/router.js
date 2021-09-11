const express = require('express')

const router = new express.Router();
const MensRanking = require('../models/mens')
router.post('/mens',async(req,res)=>{
    try{
   const addingMensRecords =  new MensRanking(req.body)
    console.log(req.body)
   const insertMens= await addingMensRecords.save()
   res.status(201).send(insertMens)
    }
    catch(e)
    {
    res.status(400).send(e)
    }
 })
 
 //READING DATA
 router.get('/mens',async(req,res)=>{
    try{
   const getMens=await MensRanking.find({})
   res.status(201).send(getMens)
    }
    catch(e)
    {
    res.status(400).send(e)
    }
 })
 //reading data for individual
 // router.get('/mens/:id',async(req,res)=>{
 //     try{
 //         const _id = req.params.id
 //    const getMen=await MensRanking.find(_id)
 //    res.status(201).send(getMen)
 //     }
 //     catch(e)
 //     {
 //     res.status(400).send(e)
 //     }
 //  })
 //reading data for individual by name
 router.get('/mens/:name',async(req,res)=>{
     try{  
         const name = req.params.name
    const getMen=await MensRanking.find({name:name}).sort({"ranking":1})
    res.status(201).send(getMen)
     }
     catch(e)
     {
     res.status(400).send(e)
     }
  })
 
 //update data
 
 router.patch('/mens/:id',async(req,res)=>{
     try{
         const _id = req.params.id
    const updateMens=await MensRanking.findByIdAndUpdate(_id,req.body,{new:true})
    res.status(201).send(updateMens)
     }
     catch(e)
     {
     res.status(500).send(e)
     }
  })
 
 //delete data
 router.delete('/mens/:id',async(req,res)=>{
     try{
         const _id = req.params.id
    const deleteMens=await MensRanking.findByIdAndDelete(_id,req.body)
    res.status(201).send(deleteMens)
     }
     catch(e)
     {
     res.status(500).send(e)
     }
  })

  module.exports = router;