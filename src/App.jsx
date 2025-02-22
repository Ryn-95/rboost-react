import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Login from './pages/Login';
import Register from './pages/Register';

// Import des pages de services
import Web from './pages/services/Web';
import Seo from './pages/services/Seo';
import Ads from './pages/services/Ads';
import SocialMedia from './pages/services/SocialMedia';
import EmailMarketing from './pages/services/EmailMarketing';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#1a1a2e]">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            {/* Routes des services */}
            <Route path="/services/web" element={<Web />} />
            <Route path="/services/seo" element={<Seo />} />
            <Route path="/services/ads" element={<Ads />} />
            <Route path="/services/social-media" element={<SocialMedia />} />
            <Route path="/services/email" element={<EmailMarketing />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
