import Home from './pages/Home';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Projects from './pages/Projects';

import Header from './Header';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path="/" element= {<Home/>} />
        <Route path="/Education" element= {<Education /> } />
        <Route path="/Experience" element= {<Experience />} />
        <Route path="/Projects" element= {<Projects />} />

      </Routes>
      </div>

  );
}

export default App;
