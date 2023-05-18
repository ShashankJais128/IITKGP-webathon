import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/header/Navbar";
import Footer from "./components/footer/Footer";
import MyEvents from "./components/myEvents/MyEvents";
import ExploreEvents from "./components/exploreEvents/ExploreEvents";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import Homemain from "./components/home/Homemain";
import axios from "axios";
import DetailView from "./components/exploreEvents/DetailView";

axios.defaults.baseURL = "http://localhost:5000/";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homemain />} />
          <Route path="/myevents/*" element={<MyEvents />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/detailview/:id" element={<DetailView />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
