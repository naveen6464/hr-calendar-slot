const mongoose=require('mongoose')
const URI='mongodb+srv://naveennataraj02:Naveenmongo@cluster0.bhlqu3c.mongodb.net/calendar'

const connectDatabase=()=>{
    mongoose.connect(URI,{

    }).then((con)=>{console.log('connect')})
    .catch((err)=>{console.log(err)})
}

module.exports=connectDatabase