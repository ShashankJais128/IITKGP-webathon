import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/header/Navbar";
import Footer from "./components/footer/Footer";
import MyEvents from "./components/myEvents/MyEvents";
import ExploreEvents from "./components/exploreEvents/ExploreEvents";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import axios from "axios";

// axios Base Url
axios.defaults.baseURL = import.meta.env.VITE_SERVER_URL;

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<MyEvents />} />
          <Route path="/explore" element={<ExploreEvents />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
