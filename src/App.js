import React, { useState } from 'react'
import Topbar from './components/topbar/Topbar'
import Intro from './components/intro/Intro'
import Portfoilo from './components/portfoilo/Portfoilo'
import Works from './components/works/Works'
import Testimonial from './components/testimonials/Testimonial'
import Contact from './components/contact/Contact'
import Menu from './components/menu/Menu'
// Sccss File
import './app.scss'



function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="App">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfoilo />
        <Works />
        <Testimonial />
        <Contact />
      </div>
    </div>
  );
}

export default App;
