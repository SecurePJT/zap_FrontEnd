import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VulnerabilityList from "./pages/VulnerabilityList";
import VulnerabilityDetail from "./pages/VulnerabilityDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VulnerabilityList />} />
        <Route path="/vulnerabilities/:name" element={<VulnerabilityDetail />} />
      </Routes>
    </Router>
  );
}

export default App;

