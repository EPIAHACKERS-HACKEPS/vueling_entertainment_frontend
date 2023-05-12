import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Page } from '../Page'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/trivial" element={<Page />} />
        <Route path="/igoto" element={<Page />} />
        <Route path="/assistance" element={<Page />} />
        <Route path="/chat" element={<Page />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
