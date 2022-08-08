import Home from './pages/Home';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Projects from './pages/Awards_and_Extracurriculars';
import Header from './Header';
import HeaderCopy from './HeaderCopy';
import React  from 'react';

import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div >
     <Header></Header>
      <Routes>
        <Route path="/" element= {<Home/>} />
        <Route path="/Education" element= {<Education /> } />
        <Route path="/Experience" element= {<Experience />} />
        <Route path="/Awards_and_Extracurriculars" element= {<Projects />} />

      </Routes>
      </div>

  );
}

export default App;
