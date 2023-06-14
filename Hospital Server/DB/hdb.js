const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/Hospital')

// registration model

const registration=mongoose.model('registration',{
    hospital_id:String,
    type:String,
    ename:String,
    department:String
    
})

const patient=mongoose.model('patient',{
    p_id:String,
    p_name:String,
    p_address:String,
    p_age:Number,
    p_contact:Number,
    p_doctor:String,
    p_date:Date,
    p_report:[]
    
})

module.exports={
    registration,patient
}