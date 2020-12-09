const express = require('express')
const connectDB= require("./config/db")

const app = express();

connectDB()

app.use(express.json({extended:false}))//middleaware

app.get('/',(req ,res)=>res.send('API running'))

app.use('/api/users',require('./routes/api/users'))
app.use('/api/auth',require('./routes/api/auth'))
app.use('/api/profile',require('./routes/api/profile'))
app.use('/api/leaderboard',require('./routes/api/leaderboard'))

const PORT= process.env.PORT || 5000

app.listen(PORT,()=>{console.log(`Server Running`)})