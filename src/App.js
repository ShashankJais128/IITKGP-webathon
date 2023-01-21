import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/header/Navbar";
import Footer from "./components/footer/Footer";
import MyEvents from "./components/myEvents/MyEvents";
import ExploreEvents from "./components/exploreEvents/ExploreEvents";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import Homemain from "./components/home/Homemain";

function App() {
  return (
    <div>
      <Router>
        {/* <Navbar /> */}

        <Routes>
          <Route path="/" element={<Homemain />} />
          <Route path="/myevents" element={<MyEvents />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
