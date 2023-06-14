const express = require('express')

const server = express()

const cors = require('cors')

const logic = require('./DB/logic')

// connect with frontend
server.use(cors({orgin:'http://localhost:3000'}))

server.use(express.json())


//request for login
server.post('/userlogin',(req,res)=>{
    logic.userLogin(req.body.id,req.body.pass).then(result=>{
        res.status(result.statusCode).json(result)
    })
})


//request for Registration
server.post('/appointment',(req,res)=>{
    logic.takeAppointment(req.body.pid,req.body.pname,req.body.address,req.body.page,req.body.pnumber,req.body.doctor,req.body.pdate)
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

// request for fetch doctor data
server.get('/getDctr',(req,res)=>{
    logic.allEmp().then(result=>{
        res.status(result.statusCode).json(result)
    })
})

// request for fetch patient data
server.get('/getpt',(req,res)=>{
    logic.fetchPatient().then(result=>{
        res.status(result.statusCode).json(result)
    })
})

// request for fetch consult patient data
server.get('/getpat/:name',(req,res)=>{
    logic.consultPatient(req.params.name).then(result=>{
        res.status(result.statusCode).json(result)
    })
})


// fetch single patient
server.get('/singlepat/:id',(req,res)=>{
    logic.fetchSingle(req.params.id).then(result=>{
        res.status(result.statusCode).json(result)
    })
})

// update report
server.post('/reportadd',(req,res)=>{
    logic.addReport(req.body.id,req.body.report).then(result=>{
        res.status(result.statusCode).json(result)
    })
})


//port setting for server
server.listen(8000,()=>{console.log("server started at 8000");})