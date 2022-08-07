const express = require("express");
const mongoose = require("mongoose");
const validator=require("validator");

const studentSchema = new mongoose.Schema({
   name: {
       type:String,
       required: true,
       minlength:3
   },
   email: {
    type:String,
    required: true,
    unique: [true,"email id already present"],
        validate(val){
        if(!validator.isEmail(val)){
            throw new Error("email not valid")
        }
        }
    },
    phone: {
    type:Number,
    required: true,
    unique: true,
    min:10,
    },
    address: {
        type:String,
        required: true,
        },

})
const Student = new mongoose.model('Student',studentSchema);
module.exports =Student;