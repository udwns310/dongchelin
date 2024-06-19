import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import FixedBottomNavigation from "./components/BottomNavi.js";
import Home from "./home/home.js";
import SignIn from "./components/SignIn.js";
import SignUp from "./components/SignUp.js";
import Review from "./review/Review.js";
import Rank from './rank/ranking.js'
import Navtitle from './home/navtitle.js'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Navtitle/>
              <Home />
              <FixedBottomNavigation />
            </div>
          }
        />
        <Route
          path="/login"
          element={
            <div>
              <Navtitle/>
              <SignIn />
              <FixedBottomNavigation />
            </div>
          }
        />
        <Route
          path="/register"
          element={
            <div>
              <Navtitle/>
              <SignUp />
              <FixedBottomNavigation />
            </div>
          }
        />
        <Route
          path="/review"
          element={
            <div>
              <Navtitle/>
              <Review />
              <FixedBottomNavigation />
            </div>
          }
        />
        <Route
          path="/ranking"
          element={
            <div>
              <Navtitle/>
              <Rank />
              <FixedBottomNavigation />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
