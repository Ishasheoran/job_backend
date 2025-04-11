import mongoose from "mongoose";
const JobSchema=new mongoose.Schema({
    company:{
type:String,required:true
    },
    role:{
        type:String,required:true
    },
    status:{
        type:String,
   enum: ['Applied', 'Interview', 'Offer', 'Rejected'],
    default: 'Applied'
    },
date:{
    type:Date,required:true
},
link:{
    type:String,required:true}
})
const Job = mongoose.model("Job", JobSchema);
export {Job};