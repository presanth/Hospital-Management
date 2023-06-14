import React, { useEffect, useState } from 'react'
import './Doctorview.css'
import Nav from '../Navbar/Nav'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Doctorview() {

  const location = useNavigate()

  const [doctor,setDoctor] = useState([])
  const [search,setSearch] = useState('')

  const fetchDoctor= async ()=>{
    const result= await axios.get('http://localhost:8000/getDctr')
    setDoctor(result.data.Doctor);
  }

useEffect(()=>{
  if(!localStorage.getItem("userid")){
    location('/')
  }else{
    fetchDoctor()
  }

},[])
  return (
    <div className='dt-view'>
        <Nav title={'Doctors'} icon={<i class="fa-solid fa-stethoscope"></i>}/>
        <div className='search-bar'>
            <input type="text" className='search-box' onChange={(e)=>setSearch(e.target.value)} placeholder='Hospital Id....'/>
            <i class="fa-solid fa-magnifying-glass"></i>
        </div>
      {
        doctor?.filter((item)=>{
          if(search == ""){
              return item
          }else if(item.hospital_id.toLowerCase().includes(search.toLowerCase())){
              return item
          }
      }).map(item=>(
          <div className='dt-box'>
            <div className='dc-icon'>
              <i class="fa-solid fa-user-doctor"></i>
            </div>
            <div className='dc-details'>
              <p className='dc-name'>{item.ename}</p>
              <p className='dc-data'> {item.department} department</p>
              <p className='dc-data'>Hospital Id: {item.hospital_id}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Doctorview