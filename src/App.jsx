import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { 
  About,
  Contact,
  Footer,
  Gallery,
  Hero,
  NavBar,
  ScrollToTop,
} from './sections';


const App = () => {
  return (
    <Router>
      <ScrollToTop/>
      <div className="App">
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
