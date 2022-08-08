import Home from './pages/Home';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Projects from './pages/Awards_and_Extracurriculars';
import Header from './Header';
import React  from 'react';

import { Route, Routes } from 'react-router-dom';
import Footer from './Footer';

function App() {

  return (
    <div >
     <Header/>
      <Routes>
        <Route path="/" element= {<Home/>}  />
        <Route path="/Education" element= {<Education /> } />
        <Route path="/Experience" element= {<Experience />} />
        <Route path="/Awards_and_Extracurriculars" element= {<Projects />} />
      </Routes>
      <Footer/>
      </div>

  );
}

export default App;
