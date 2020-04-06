const express = require('express')
const router = express.Router()
const Todo = require('../models/todo')

router.get('/list', (req, res, next)=>{
    Todo.find()
    .then(result => {
        res.status(200).json({
            result : result
        })
    })
    .catch(err=>{
        res.status(500).json({
            error:err
        })
    })
    
})

router.post('/', (req, res, next) => {
    const todo = new Todo({
        title : req.body.title,
        done:false
    })
    todo.save()
   
    .then(result => {

        res.status(200).json({
            msg:'',
            result:result
        })
    })
    .catch(err =>{
        res.status(500).json({
            error:err
        })
    })
})

router.post('/update', (req, res, next) => {
    const Id=req.body.id
    Todo.findOne({ _id:Id}, function (err, doc){
        doc.done= true;       
        doc.save();
      })
  
    .then(result => {

        res.status(200).json({
            msg:'',
            result:result
        })
    })
    .catch(err =>{
        res.status(500).json({
            error:err
        })
    })
})
router.delete('/', (req, res, next)=>{
    const Id=req.body.Id
    console.log('LL',Id)
    Todo.remove({_id: Id})
    // Todo.find()
     .then(resy=>{
        Todo.find()
        .then(result=>{
         
            res.status(200).json({
                result:result
            })
        })
        
     }).catch(err=>{
         res.status(500).json({
         error:err
     })
     })
   
 })

module.exports = router