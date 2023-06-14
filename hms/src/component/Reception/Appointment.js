import React, { useState,useEffect } from 'react'
import './Appointment.css'
import Nav from '../Navbar/Nav'
import axios from 'axios'
import uuid from 'react-uuid'
import { useNavigate } from 'react-router-dom'


function Appointment() {

  const location = useNavigate()

  const [pid,setPid] = useState('')
  const [pname,setPname]=useState('')
  const [address,setAddress]=useState('')
  const [page,setPage]=useState(0)
  const [pnumber,setPnumber]=useState(0)
  const [doctor,setDoctor]=useState('')
  const [pdate,setPdate]=useState('')



  const takeAppointment= async (ev)=>{
    ev.preventDefault()
    setPid(uuid().slice(0,3));
    const body={
      pid,
      pname,
      address,
      page,
      pnumber,
      doctor,
      pdate
    }
      const result = await axios.post('http://localhost:8000/appointment',body) 
      alert(result.data.message)
      console.log(pname);

  }
  useEffect(()=>{
    if(!localStorage.getItem("userid")){
      location('/')
    }
    setPid(uuid().slice(0,3));
  },[])
  return (
    <div className='appointment'>
      <Nav title={'Appointment'} icon={<i class="fa-regular fa-calendar-check"></i>}/>
        <div className='ap-form'>
            <div className='patient-box'>
              <label>Patient Name</label>
              <input type="text" onChange={(s)=>{setPname(s.target.value)}} required/>
            </div>
            <div className='patient-box'>
              <label>Address</label>
              <input type="text" onChange={(e)=>setAddress(e.target.value)} required/>
            </div>
            <div className='patient-box'>
              <label>Age</label>
              <input type="text" onChange={(e)=>setPage(e.target.value)} required/>
            </div>
            <div className='patient-box'>
              <label>Phoen Number</label>
              <input type="text" onChange={(e)=>setPnumber(e.target.value)} required/>
            </div>
            <div className='patient-box'>
              <label>Doctor</label>
              <input type="text" onChange={(e)=>setDoctor(e.target.value)} required/>
            </div>
            <div className='patient-box'>
              <label>Date</label>
              <input type="date" onChange={(e)=>setPdate((e.target.value).slice(0,10))} required/>
            </div>
            <button type='submit' className='appointment-button' onClick={(ev)=>takeAppointment(ev)}>submit</button>
        </div>
    </div>
  )
}

export default Appointment