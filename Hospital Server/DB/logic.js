const db = require('./hdb')


const userLogin = (id,pass)=>{
    return db.registration.findOne({hospital_id:id,password:pass}).then(user=>{
        if(user){
            return{
                statusCode:200,
                user:user,
                message:"login successfuly"
            }
        }else{
            return{
                statusCode:404,
                message:"Invalid UserId OR Password"
            }
        }
    })
}

const takeAppointment = (pid,pname,address,page,pnumber,doctor,pdate)=>{
    return db.patient.findOne({p_id:pid}).then(result=>{
        if(result){
            return{
                statusCode:404,
                message:"Id already exist"
            }
        }else{

            const newPatient = new db.patient({
                p_id:pid,
                p_name:pname,
                p_address:address,
                p_age:page,
                p_contact:pnumber,
                p_doctor:doctor,
                p_date:pdate
            })
            newPatient.save()
            return{
                statusCode:200,
                message:"appointment allowded"
            }
        }
    })
}




const allEmp = ()=>{
    return db.registration.find({type:'doctor'}).then(result=>{
         if(result){
             return{
                 statusCode:200,
                 Doctor:result
             }
         }else{
             return{
                 statusCode:404,
                 message:"no data is available"
             }
         }
     })
 }


const fetchPatient = ()=>{
    return db.patient.find().then(result=>{
        if(result){
            return{
                statusCode:200,
                patient:result
            }
        }else{
            return{
                statusCode:404,
                message:"no data available"
            }
        }
    })
 }

 const consultPatient = (dc)=>{

    const d = new Date()
    var yr = d.getFullYear();
    var mo = (d.getMonth())+1
    var day = d.getDate();
    var check = yr+"-"+"0"+mo+"-"+day

    return db.patient.find({p_doctor:dc,p_date:check}).then(result=>{
        if(result){
            return{
                statusCode:200,
                consultdata:result
            }
        }else{
            return{
                statusCode:404,
                message:"no data available"
            }
        }
    })
 }

 const fetchSingle = (id)=>{
    return db.patient.findOne({p_id:id}).then(result=>{
        if(result){
            return{
                statusCode:200,
                data:result
            }
        }else{
            return{
                statusCode:404,
                message:'no data available'
            }
        }
    })
 }

 const addReport = (id,report)=>{
    const d = new Date()
    var yr = d.getFullYear();
    var mo = (d.getMonth())+1
    var day = d.getDate();
    var check = yr+"-"+"0"+mo+"-"+day
    return db.patient.findOne({p_id:id}).then(result=>{
        if(result){
            result.p_report.push({date:check,report:report})

            result.save()
            return{
                statusCode:200,
                message:'New Report Updated'
            }
        }else{
            return{
                statusCode:404,
                message:'employ not present'
            }
        }
    })
 }

 module.exports={
    allEmp,userLogin,takeAppointment,fetchPatient,consultPatient,fetchSingle,addReport
 }