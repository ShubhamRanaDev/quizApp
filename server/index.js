const express = require('express')
const connectDB= require("./config/db")

const app = express();

connectDB()

app.use(express.json({extended:false}))//middleaware

app.get('/',(req ,res)=>res.send('API running'))

const PORT= process.env.PORT || 5000

app.listen(PORT,()=>{console.log(`Server Running`)})