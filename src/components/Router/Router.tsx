import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Page } from '../Page'
import { Home } from '../Home'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trivial" element={<Page />} />
        <Route path="/igoto" element={<Page />} />
        <Route path="/assistance" element={<Page />} />
        <Route path="/chat" element={<Page />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
