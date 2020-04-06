
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const mongoose = require('mongoose')
const TodoRoutes = require('./api/routes/Todo')
app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27018/todolist',
 {useNewUrlParser:false, useUnifiedTopology:true})

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

// app.use((req,res,next)=>{
//     res.header('Access-Control-Allow-Origin', '*')
//     res.header('Access-Control-Allow-Header', '*')
//     if(req.method === 'OPTIONS'){
//       res.header('Access-Control-Allow-Methods', '*')
//       return res.status(200).json()
//     }
//     next()
// }) 

app.use('/todo', TodoRoutes)

app.use((req,res,next)=>{
    res.status(404).json({
        msg:'not found'
    })
})

app.listen(9000)