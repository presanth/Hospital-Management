
import './App.css';
import Home from './component/Home';
import Reception from './component/Reception/Reception';
import Appointment from './component/Reception/Appointment';
import Doctorview from './component/Reception/Doctorview';
import { Route, Routes } from 'react-router-dom';
import Patient from './component/Reception/Patient';
import Consult from './component/Consulting/Consult';
import Report from './component/Consulting/Report';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/reception' element={<Reception/>}></Route>
        <Route path='/appointment' element={<Appointment/>}></Route>
        <Route path='/viewDoctor' element={<Doctorview/>}></Route>
        <Route path='/viewPatient' element={<Patient/>}></Route>
        <Route path='/consulting/:name' element={<Consult/>}></Route>
        <Route path='/report/:id' element={<Report></Report>}></Route>
      </Routes>
    </div>
  );
}

export default App;
