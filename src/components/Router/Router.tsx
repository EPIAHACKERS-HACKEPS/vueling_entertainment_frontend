import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../Home'
import { Trivial } from '../Trivial'
import IGoTo from '../IGoTo/IGoTo'
import Leaderboard from '../Leaderboard/LeaderBoard'
import { Page } from '../Page'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trivial" element={<Trivial />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/igoto" element={<IGoTo />} />
        <Route path="/assistance" element={<Page />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
