import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import VulnerabilityList from './pages/VulnerabilityList'
import VulnerabilityDetail from './pages/VulnerabilityDetail'
// 페이지별 라우팅 담당
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/vulnerabilities" element={<VulnerabilityList />} />
        <Route path="/vulnerabilities/:id" element={<VulnerabilityDetail />} />
      </Routes>
    </Router>
  )
}
