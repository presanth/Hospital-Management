import React, { useEffect, useState } from 'react'
import './Consult.css'
import Nav from '../Navbar/Nav'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

function Consult() {
  const location = useNavigate()
  const [coPatient,setCoPatient] = useState([])

  const fetchPatient= async ()=>{
    const dc = (JSON.parse(localStorage.getItem("username") || " "))
    const result= await axios.get('http://localhost:8000/getpat/'+dc)
    setCoPatient(result.data.consultdata);
  }

  useEffect(()=>{

    if(!localStorage.getItem("userid")){
      location('/')
    }else{
      fetchPatient()
    }
    
  },[1])

  return (
    <div className='con-container'>
        <Nav title={'Consultation'} icon={<i class="fa-solid fa-briefcase-medical"></i>}/>
        <div className='con-box'>
            {
              coPatient?.map(item=>(
                <Link to={`/report/${item.p_id}`} className='con-card'>
                  <div className='con-icon'>
                    <i class="fa-solid fa-bed"></i>
                  </div>
                  <div className='con-data'>
                    <div className='con-details'><p className='con-head'>Name : </p><p className='con-text'>{item.p_name}</p></div>
                    <div className='con-details'><p className='con-head'>Age : </p><p className='con-text'>{item.p_age}</p></div>
                    <div className='con-details'><p className='con-head'>Address : </p><p className='con-text'>{item.p_address}</p></div>
                  </div>
                </Link>
              ))
            }
        </div>
    </div>
  )
}

export default Consult