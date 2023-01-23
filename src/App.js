import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/header/Navbar";
import Footer from "./components/footer/Footer";
import MyEvents from "./components/myEvents/MyEvents";
import ExploreEvents from "./components/exploreEvents/ExploreEvents";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import Homemain from "./components/home/Homemain";
import axios from "axios";
import AuthContext from "./store/auth-context";
import { useContext } from "react";
import DetailView from "./components/exploreEvents/DetailView";
axios.defaults.baseURL = "http://localhost:5000/";

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <div>
      <Router>
        {/* <Navbar /> */}

        <Routes>
          <Route path="/" element={<Homemain />} />
          {authCtx.isLoggedIn && (
            <Route path="/dashboard/*" element={<MyEvents />} />
          )}
          {!authCtx.isLoggedIn && <Route path="/signup" element={<Signup />} />}
          {!authCtx.isLoggedIn && <Route path="/login" element={<Login />} />}
          <Route path="/detailview/:id" element={<DetailView />} />
          <Route path="*" element={<Homemain />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
