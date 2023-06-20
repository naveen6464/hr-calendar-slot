const data=require('./data.json');
const HR = require('../models/hr');

const connectDatabase = require('../config/db')

//dotenv.config({path:'backend/config/config.env'});
connectDatabase();

const seedProducts = async ()=>{
    try{
        await HR.deleteMany();
        console.log('Products deleted!')
        await HR.insertMany(data);
        console.log('All products added!');
    }catch(error){
        console.log(error.message);
    }
    process.exit();
}

seedProducts();