import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import Features from './components/Features';
import DemoTool from './components/DemoTool';
import Stats from './components/Stats';
import Blog from './components/Blog';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Login from './components/Login';
import Home from './pages/Home';

function AppContent() {
  const { currentUser } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <OurStory />
      <Features />
      <DemoTool />
      <Stats />
      <Blog />
      <Testimonial />
      <Footer />
      <Chatbot />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/app" element={<AppContent />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;