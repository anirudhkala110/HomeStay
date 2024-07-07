import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Utils/Navbar';
import Homepage from './Assists/Homepage';
import SupportiveNav from './Utils/SupportiveNav';
import AboutPage from './Assists/AboutPage';
import ContactPage from './Assists/ContactPage';
import LandingPage from './Components/LandingPage';
import Footer from './Utils/Footer';
import PageNotFound from './Components/PageNotFound';
import Images from './Images/Images';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="px-0" style={{ minWidth: "400px" }}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>HOME STAY RETREAT – Camping Retreat near THFGH, Satpuli , Lansdowne</title>
        <meta name="description" content="Home Stay Near THFGH , Home stay near 'The Hans Foundation General Hospital', Home Stay near me, Home Stay in Lansdown, Near banghat 1, Lansdowne 25 Tarkeshwar " />
        <meta name="keyword" content="Home Stay Near THFGH , Home stay near 'The Hans Foundation General Hospital', Home Stay near me, Home Stay in Lansdown,Home stay Near banghat, home stay near Lansdowne, home stay in Tarkeshwar,home stay near me, house on rent near me, house on rent in Tarkeshwar, house on rent in banghat , house on rent near THFGH, house on rent in lansdown  " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <div className=''>

        <Router>
          <Navbar />
          <div className='mt-5 py-3 bg-black'>
            <SupportiveNav />
          </div>
          <Routes>
            <Route exact path='/' element={<Homepage />} />
            <Route exact path='/home-stay-landing-page' element={<LandingPage />} />
            {/* <Route exact path='/about' element={<AboutPage />} /> */}
            <Route exact path='/gallery' element={<Images />} />
            <Route exact path='/contact' element={<ContactPage />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
