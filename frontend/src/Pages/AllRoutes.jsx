import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DevLogin from './../Components/Developer/DevLogin';
import DevSignup from '../Components/Developer/DevSignup';
import ClientLogin from '../Components/Client/ClientLogin';
import ClientSignup from '../Components/Client/ClientSignup';
import Homepage from './Homepage';
import Client from '../Components/Client/Client';
import Developer from '../Components/Developer/Developer';
import Devonboarding from '../Components/Developer/Devonboarding';

const AllRoutes = () => {
  return (
      <Routes>
          <Route path="" element={<Homepage/>}/>
          <Route path="/devlogin" element={<DevLogin/>}/>
          <Route path="/devsignup" element={<DevSignup/>}/>
          <Route path="/clientlogin" element={<ClientLogin/>}/>
          <Route path="/clientsignup" element={<ClientSignup/>}/>
          <Route path="/client" element={<Client/>}/>
          <Route path="/developer" element={<Developer/>}/>
          <Route path="/onboard" element={<Devonboarding/>}/>
    </Routes>
  )
}

export default AllRoutes