import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/landing/Landing';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Portfolio from './pages/portfolio/Portfolio';
import Navbar from './components/PageHeader';


function App() {
  return (
    
    <Router>
      <Navbar />
      <div className="App">
        <Route>
          <Route path="/landing" element={Landing} />
          <Route path="/about" element={About} />
          <Route path="/contact" element={Contact} />
          <Route path="/portfolio" element={Portfolio} />
        </Route>
      </div>
    </Router>
  );

}

export default App;
