import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import NewProject from './components/pages/NewProject';
import Projects from './components/pages/Projects'
import Project from './components/pages/Project'

import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <Router>
     <Navbar/>
      
      <Container customClass="minHeight">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/projects' element={<Projects />} />
          <Route exact path='/newproject' element={<NewProject />} />
          <Route exact path='/project/:id' element={<Project />} />
        </Routes>
      </Container>
      
      <Footer/>
    </Router>
  );
}

export default App;
