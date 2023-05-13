import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Page } from '../Page'
import { Home } from '../Home'
import { Trivial } from '../Trivial'
import IGoTo from '../IGoTo/IGoTo'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trivial" element={<Trivial />} />
        <Route path="/igoto" element={<IGoTo />} />
        <Route path="/assistance" element={<Page />} />
        <Route path="/chat" element={<Page />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
