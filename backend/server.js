const app= require('./app');

const connectDatabase=require('./config/db')



connectDatabase()


const server=app.listen(8000,()=>{console.log('server runing the port')})
