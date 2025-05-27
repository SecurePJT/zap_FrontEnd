import VulnerabilityList from './pages/VulnerabilityList';
import VulnerabilitySummary from './pages/VulnerabilitySummary';
import VulnerabilityDetail from './pages/VulnerabilityDetail'; 

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VulnerabilityList />} />
        <Route path="/vulnerability-summary" element={<VulnerabilitySummary />} />
        <Route path="/vulnerability-detail/:name" element={<VulnerabilityDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
