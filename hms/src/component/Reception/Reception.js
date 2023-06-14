import React from 'react'
import './Reception.css'
import { Link } from 'react-router-dom'
import Nav from '../Navbar/Nav'
import { useNavigate } from 'react-router-dom'

function Reception() {
  // const n = useNavigate() 
  return (
    <div className='reception'>
      <Nav icon={<i class="fa-regular fa-hospital"></i>} title={'Hospital Management System'}></Nav>
      <div className='function-box'>
        <Link to={'/appointment'} className='appointment-card'>
          <p><i class="fa-regular fa-calendar-check"></i>APPOINTMENT</p>
        </Link>
        <Link to={'/viewDoctor'} className='doctor-card'>
          <p> <i class="fa-solid fa-stethoscope"></i>DOCTORS</p>
        </Link>
        <Link to={'/viewPatient'} className='patient-card'>
          <p><i class="fa-solid fa-hospital-user"></i>PATIENTS</p>
        </Link>
      </div>
    </div>
  )
}

export default Reception