import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Utils/Navbar';
import Homepage from './Assists/Homepage';
import SupportiveNav from './Utils/SupportiveNav';
import AboutPage from './Assists/AboutPage';
import ContactPage from './Assists/ContactPage';
import LandingPage from './Components/LandingPage';
import Footer from './Utils/Footer';

function App() {
  return (
    <div className="px-0" style={{ minWidth: "400px" }}>
      <div className=''>
        <Router>
          <Navbar />
          <div className='mt-5 py-3 bg-black'>
            <SupportiveNav />
          </div>
          <Routes>
            <Route exact path='/' element={<Homepage />} />
            <Route exact path='/home-stay-landing-page' element={<LandingPage />} />
            <Route exact path='/about' element={<AboutPage />} />
            <Route exact path='/contact' element={<ContactPage />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
