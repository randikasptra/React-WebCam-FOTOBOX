import React from 'react'
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom'
import Home from '../page/home'
import TakeCam from '../page/takecam'

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/take" element={<TakeCam />} />
      </Routes>
    </Router>
  )
}

export default AppRouter


