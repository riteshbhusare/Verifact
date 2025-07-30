import React from 'react';
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
import UserProfile from './components/UserProfile';

function AppContent() {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Login />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <UserProfile />
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
      <AppContent />
    </AuthProvider>
  );
}

export default App;