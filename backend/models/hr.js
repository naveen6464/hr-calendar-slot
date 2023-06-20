const mongoose=require('mongoose');


const hr= new mongoose.Schema({
  
   
    hrName: {
        type:String},
    hrId: {
        type:String},
    hrProfilePic:
      {
        type:String},
    companyName: {
        type:String},
  }
)

let model=mongoose.model('HR',hr)

module.exports=model;