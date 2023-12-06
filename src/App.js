import './App.css';
import Home from './components/Home';
import Menu from './components/Menu';
import {  Container, Row, Col } from 'reactstrap';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Foodstuffs from './components/Foodstuffs';

function App() {

  return (
    <div className="App">
      <Router>
  
      <Container>
      <Header/>

        <Row>
          <Col md={4}><Menu/></Col>
          <Col md={8}>
            <Routes>
            <Route path='/' Component={Home} exact />
            <Route path='/foodstuffs' Component={Foodstuffs} exact/>
            <Route path='/about-com' Component={About} exact/>
            <Route path='/contact' Component={Contact} exact/>
           
            </Routes>
          </Col>
        </Row>
      </Container>
      </Router>

    </div>
  );
}

export default App;

