import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Toolbar from './components/Toolbar.js';
import { Routes, Route, Link } from 'react-router-dom';
import FixedBottomNavigation from './components/BottomNavi.js';
import Home from './home/home.js';
import SignIn from './components/SignIn.js';
import SignUp from './components/SignUp.js';
function App() {
    return (
        <div className="App">
            <Routes>
                <Route
                    path="/"
                    element={
                        <div>
                            {/* <Toolbar />  */}
                            <Home />
                            <FixedBottomNavigation />
                        </div>
                    }
                />
                <Route
                    path="/login"
                    element={
                        <div>
                            <SignIn />
                            <FixedBottomNavigation />
                        </div>
                    }
                />
                <Route
                    path="/register"
                    element={
                        <div>
                            <SignUp />
                            <FixedBottomNavigation />
                        </div>
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
