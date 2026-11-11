import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ProjectDetails from './pages/ProjectDetails.jsx'

export default function App() {
  return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/projects/:slug" element={<ProjectDetails />} />
  </Routes>
}
