const express = require('express');
const app=express();
const cors=require('cors');

app.use(cors())
app.use(express.json())

const event= require('./router/index')

app.use('/api/v1/',event);

module.exports=app



