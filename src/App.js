import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AccountMenu from './components/menu';
import Home from './pages/home';
import Recensie from './pages/recensie';
import Fotogallery from './pages/fotogallery';
import Vestigingen from './pages/vestigingen';

function App() {
  return (
    <Router>
      <AccountMenu />
      <Routes>
        {/* Default route for the home page */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/recensie" element={<Recensie />} />
        <Route path="/fotogallery" element={<Fotogallery />} />
        <Route path="/vestigingen" element={<Vestigingen />} />
      </Routes>
    </Router>
  );
}

export default App;