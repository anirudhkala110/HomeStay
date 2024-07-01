import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Utils/Navbar';
import Homepage from './Assists/Homepage';
import SupportiveNav from './Utils/SupportiveNav';
import AboutPage from './Assists/AboutPage';
import ContactPage from './Assists/ContactPage';

function App() {
  return (
    <div className="container-fluid min-vh-100 px-0" style={{ minWidth: "350px" }}>
      <div className=''>
        <Router>
          <SupportiveNav />
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Homepage />} />
            <Route exact path='/about' element={<AboutPage />} />
            <Route exact path='/contact' element={<ContactPage />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
