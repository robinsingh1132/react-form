import './App.css';
import Form from './Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Privacy from './component/privacy';
import About from './component/about';
import Contact from './component/contact';
import Home from './component/home';
import Login from './component/login';
import Profile from './component/profile';
// import PrivateRoute from './PrivateRoute';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Follower from './component/follower';

function App() {
  return (
    <>
      <Router>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to="/dashboard">React App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
                <Nav.Link as={Link} to="/privacy">Privacy</Nav.Link>
                <Nav.Link as={Link} to="/about">About us</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contact us</Nav.Link>
                <Nav.Link as={Link} to="/followers">Followers</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container>
          <Routes>
            <Route exact path='/dashboard' element={
              <PrivateRoute redirectTo='/login'><Home/> </PrivateRoute>}>
            </Route>
            <Route exact path='/profile' element={
              <PrivateRoute redirectTo='/login'><Profile/> </PrivateRoute>}>
            </Route>
            <Route exact path='/privacy' element={<Privacy/>}></Route>
            <Route exact path='/about' element={<About/>}></Route>
            <Route exact path='/contact' element={<Contact/>}></Route>
            <Route exact path='/login' element={<Login/>}></Route>
            <Route exact path='/signup' element={<Form/>}></Route>
            <Route exact path='/followers' element={<Follower/>}></Route>
          </Routes>
        </Container>
      </Router>
    </>
  );
}

function PrivateRoute({ children, redirectTo }) {
  const isPrivate = false;
  return isPrivate ? children : <Navigate to={redirectTo} />;
}

export default App;
