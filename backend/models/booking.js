const mongoose=require('mongoose');


const book= new mongoose.Schema({
   fullName: {
        type:String,
        required:true
      },
  email: {
         type:String,
         required:true
        },
 mobileNum: {
        type:String,
        required:true
 },
 selectedHr:[{
        hrName: {
        type:String},
    hrId: {
        type:String},
    hrProfilePic:
      {
        type:String},
    companyName: {
        type:String}
}],

slotDateStart: 
 {
   type:String
},
 slotDateEnd:
 {
  type:String
}

})

let model=mongoose.model('event',book)

module.exports=model;