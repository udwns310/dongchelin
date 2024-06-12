import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import FixedBottomNavigation from './components/BottomNavi.js';
import Home from './home/home.js';
import SignIn from './components/SignIn.js';
import SignUp from './components/SignUp.js';
import Review from './components/Review.js';

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
                <Route
                    path="/review"
                    element={
                        <div>
                            <Review />
                            <FixedBottomNavigation />
                        </div>
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
