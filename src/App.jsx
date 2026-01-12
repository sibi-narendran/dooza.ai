import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './pages/Home.jsx'
import Studio from './pages/Studio.jsx'
import PartnerProgram from './pages/PartnerProgram.jsx'
import PartnerSignup from './pages/PartnerSignup.jsx'
import Blog from './pages/Blog.jsx'
import AIEmployeesTransformingBusiness from './pages/blog/AIEmployeesTransformingBusiness.jsx'
import BetterThanSintraAI from './pages/blog/BetterThanSintraAI.jsx'
import BetterThanMarblism from './pages/blog/BetterThanMarblism.jsx'
import AiAgentsVsAgenticAi from './pages/blog/AiAgentsVsAgenticAi.jsx'
import NotFound from './pages/NotFound.jsx'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/studio" element={<Studio />} />
        <Route path="/partners" element={<PartnerProgram />} />
        <Route path="/partner-signup" element={<PartnerSignup />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/ai-employees-transforming-small-business" element={<AIEmployeesTransformingBusiness />} />
        <Route path="/blog/better-than-sintra-ai" element={<BetterThanSintraAI />} />
        <Route path="/blog/better-than-marblism" element={<BetterThanMarblism />} />
        <Route path="/blog/ai-agents-vs-agentic-ai" element={<AiAgentsVsAgenticAi />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
