import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ReportPage from './ReportPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/report" element={<ReportPage />} />
    </Routes>
  );
}

export default App;