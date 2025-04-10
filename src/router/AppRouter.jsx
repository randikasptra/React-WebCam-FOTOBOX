import React from 'react'
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom'
import Home from '../page/home'

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default AppRouter