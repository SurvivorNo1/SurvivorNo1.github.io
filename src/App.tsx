import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Photos from './pages/Photos';
import Publications from './pages/Publications';
import Blogs from './pages/Blogs';
import Layout from './pages/Layout';
import './App.css';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<About />} />
          <Route path="publications" element={<Publications />} />
          <Route path="photos" element={<Photos />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="*" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
