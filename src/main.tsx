import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import SkillsPage from './pages/SkillsPage.tsx'
import ActivitiesPage from './pages/ActivitiesPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/Minduli-Lasandi-Portfolio">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/activities" element={<ActivitiesPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
