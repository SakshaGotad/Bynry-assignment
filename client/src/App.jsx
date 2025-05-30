import React from 'react'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import ProfilesList from './components/ProfileList'
import ProfileDetails from './components/ProfileDetails'
const App = () => {
  return (
   <Routes>
    <Route path='/' element={<ProfilesList/>} />
    <Route path='/profile/:id' element={<ProfileDetails/>}/>
   </Routes>
  )
}

export default App
