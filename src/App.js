import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Nav from '../src/components/Nav';
import HomePage from '../src/pages/HomePage';
import About from '../src/pages/About';
import Shop from '../src/pages/Shop';
import Item from './pages/Item';


function App() {
  return (
    <Router>
      <div className='text-center'>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<Item />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
