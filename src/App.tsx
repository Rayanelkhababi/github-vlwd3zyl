import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BookCall from './pages/BookCall';
import FAQ from './pages/FAQ';
import ThankYou from './pages/ThankYou';
import Payment from './pages/Payment';
import Terms from './pages/Terms';
import Reviews from './pages/Reviews';
import Technology from './pages/Technology';
import Timeline from './pages/Timeline';
import GlobalCoverage from './pages/GlobalCoverage';
import VoiceAgent from './pages/VoiceAgent';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/book-call" element={<BookCall />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/global-coverage" element={<GlobalCoverage />} />
            <Route path="/voice-agent" element={<VoiceAgent />} />
            <Route path="*" element={<Navigate to="/\" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;