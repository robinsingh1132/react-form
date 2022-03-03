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

function App() {
  return (
    <>
     <Router>
          <div className="app">
              <ul className="app-header">
                <li>
                  <Link to="/dashboard">Home</Link>
                </li>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/privacy">Privacy</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/signup">Sign Up</Link>
                </li>
              </ul>
              <Routes>      

                 <Route exact path='/dashboard' element={
                    <PrivateRoute redirectTo='/login'><Home/> </PrivateRoute>}>
                 </Route>
                 <Route exact path='/profile' element={
                    <PrivateRoute redirectTo='/login'><Profile/> </PrivateRoute>}>
                 </Route>
                 <Route exact path='/privacy' element={<Privacy />}></Route>
                 <Route exact path='/about' element={<About />}></Route>
                 <Route exact path='/contact' element={<Contact />}></Route>
                 <Route exact path='/login' element={<Login />}></Route>
                 <Route exact path='/signup' element={<Form />}></Route>

              </Routes>
          </div>
        </Router>
    </>
  );
}

function PrivateRoute({ children, redirectTo }) {
  const isPrivate = false;
  return isPrivate ? children : <Navigate to={redirectTo} />;
}

export default App;
