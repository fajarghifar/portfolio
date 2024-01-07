import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';

import AppProvider from './context/AppProvider';

function App() {
  return (
    <AppProvider>
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/projects" element={ <Projects /> } />
        <Route path="/testimonials" element={ <Testimonials /> } />
        <Route path="/contact" element={ <Contact /> } />
      </Routes>
    </AppProvider>
  );
}

export default App;
