import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/header/Navbar";
import Footer from "./components/footer/Footer";

// Pages
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Homemain from "./components/home/Homemain";
import MyEvents from "./components/myEvents/MyEvents";
import ExploreEvents from "./components/exploreEvents/ExploreEvents";

// Axios
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
