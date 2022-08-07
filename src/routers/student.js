const express = require("express");
const router = new express.Router();
const Student= require("../models/students");

router.post("/students",async(req,res)=>{
    try{
    const user=new Student(req.body);
    const createUser = await user.save(); 
    res.status(201).send(createUser);
    }catch(e){
        res.status(400).send(e);
    }
})

router.get("/students",async(req,res)=>{
    try{
    const showUsers = await Student.find(); 
    res.status(201).send(showUsers);
    }catch(e){
        res.status(400).send(e);
    }
})


// router.get("/students/:name",async(req,res)=>{
//     try{
//     const name = req.params.name; 
//     const studentdata= await Student.findById({_id:name});
//     if(!studentdata){
//         return res.status(404).send();
//     }
//     res.send(studentdata);
//     }catch(e){
//         res.status(400).send(e);
//     }
// })

router.get("/students/:naam",async(req,res)=>{
    try{
    const naam = req.params.naam; 
    const studentdata= await Student.find({name:naam});
    if(!studentdata){
        return res.status(404).send();
    }
    res.send(studentdata);
    }catch(e){
        res.status(400).send(e);
    }
})

router.patch("/students/:id",async(req,res)=>{
    try{
    const id = req.params.id; 
    const updatestudent= await Student.findByIdAndUpdate({_id:id},req.body,{new:true});
    res.send(updatestudent);
    }catch(e){
        res.status(400).send(e);
    }
})

router.delete("/students/:id",async(req,res)=>{
    try{
    const id = req.params.id; 
    const deletestudent= await Student.findByIdAndDelete(id);
    if(!deletestudent){
        return res.status(400).send();
    }
    res.send(deletestudent);
    }catch(e){
        res.status(500).send(e);
    }
})

module.exports = router;