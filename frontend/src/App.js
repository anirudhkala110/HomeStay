import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Utils/Navbar';
import Homepage from './Assists/Homepage';
import SupportiveNav from './Utils/SupportiveNav';

function App() {
  return (
    <div className="container-fluid min-vh-100 px-0">
      <SupportiveNav />
      <Navbar />
      <div className=''>
        <Router>
          <Routes>
            <Route exact path='/' element={<Homepage />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
