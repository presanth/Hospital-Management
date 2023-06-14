import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Nav from '../Navbar/Nav'
import './Patient.css'
import { useNavigate } from 'react-router-dom'


function Patient() {

    const location = useNavigate()

    const [patient,setPatient] = useState([])
    const [search,setSearch] = useState('')

    const fetchPatient = async ()=>{
        const result = await axios.get('http://localhost:8000/getpt')
        setPatient(result.data.patient);
    }

    useEffect(()=>{
        if(!localStorage.getItem("userid")){
            location('/')
          }else{
            fetchPatient()
          }

    },[])

  return (
    <div className='pt-view'>
        <Nav title={'Patients'} icon={<i class="fa-solid fa-hospital-user"></i>}></Nav>
        <div className='search-bar'>
            <input type="text" className='search-box' onChange={(e)=>setSearch(e.target.value)} placeholder='Patient Id....'/>
            <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className='patient-container'>
          {
              patient?.filter((item)=>{
                  if(search == ""){
                      return item
                  }else if(item.p_id.toLowerCase().includes(search.toLowerCase())){
                      return item
                  }
              }).map(item=>(
                  <div className='pt-box'>
                    <div className='pt-icon'>
                      <i class="fa-solid fa-bed-pulse"></i>
                    </div>
                    <div className='pt-details'>
                      <p className='pt-name'>{item.p_name}</p>
                      <p className='pt-data'> {item.p_address}</p>
                      <p className='pt-data'>Age: {item.p_age}</p>
                      <p className='pt-data'>Patient Id: {item.p_id}</p>
                      <p className='pt-data'>Patient Contact: {item.p_contact}</p>
                      <p className='pt-data'>Consulted By: Dr. {item.p_doctor}</p>
                      <p className='pt-data'>Last consultation:  {item.p_date.slice(0,10)}</p>
                    </div>
                  </div>
              ))
          }
        </div>
    </div>
  )
}

export default Patient