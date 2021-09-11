const express = require("express")
const router = new express.Router()
const Student = require("../models/student")

router.post('/students',async(req,res)=>{   // since we have to add new user that's why we use post rather than get
    try{
 
     const user = new Student(req.body)
     const createUser =await user.save();  
     res.status(201).send(createUser);
  
    }
 
    catch(e){
     res.status(400).send(e);
    }
 })
 
 
 
 
 //read the data
 
 router.get('/students', async(req,res)=>{
 
     try{
       const studentsData = await Student.find();
       res.status(201).send(studentsData)
     }
     catch(e){
       res.status(400).send(e);
     }
 
 })
 
 // individual data by id
 
 router.get('/students/:id', async(req,res)=>{
   try{
   const _id = req.params.id;
     
  const studentData =  await Student.findById(_id);
  console.log(studentData)
 
 
  if(!studentData){
  return res.status(404).send();
  }
  else{
      res.status(201).send(studentData)
  }
  
 }
 catch(e){
   res.status(500).send(e);
 }
 
 })
 // individual data by name
 
 // app.get('/students/:name', async(req,res)=>{
 //   try{
 //   const name = req.params.name;
     
 //  const studentData =  await Student.find(name);
 //  console.log(studentData)
 
 
 //  if(!studentData){
 //  return res.status(404).send();
 //  }
 //  else{
 //      res.status(201).send(studentData)
 //  }
  
 // }
 // catch(e){
 //   res.status(500).send(e);
 // }
 
 // })
 
 //update the student by id
 
 
 router.patch('/students/:id', async(req,res)=>{
     try{
     const _id = req.params.id;
       
    const updateStudents =  await Student.findByIdAndUpdate(_id,req.body,{
        new:true
    });
 
    res.send(updateStudents)
   }
   catch(e){
      res.status(404).send(e);
   }
   
   })
 // delete the student by id
 
 router.delete("/students/:id", async(req,res)=>{
     try{
         const _id = req.params.id;
          const deleteStudent = await Student.findByIdAndDelete(_id,req.body,{
             new:true})
          if(!deleteStudent)
          {
              return res.status(404).send();
          }
          else{
              res.send(deleteStudent)
          }
 
     }
     catch(e){
         res.status(500).send(e);
     }
 })
 
module.exports = router