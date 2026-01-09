import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import AgentBuilder from './pages/AgentBuilder.jsx'
import PartnerProgram from './pages/PartnerProgram.jsx'
import PartnerSignup from './pages/PartnerSignup.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/agent-builder" element={<AgentBuilder />} />
      <Route path="/partners" element={<PartnerProgram />} />
      <Route path="/partner-signup" element={<PartnerSignup />} />
    </Routes>
  )
}

export default App
