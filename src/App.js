import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/header/Navbar";
import Footer from "./components/footer/Footer";

// Pages
const Login = React.lazy(() => import("./components/login/Login"));
const Signup = React.lazy(() => import("./components/signup/Signup"));
const Homemain = React.lazy(() => import("./components/home/Homemain"));
const MyEvents = React.lazy(() => import("./components/myEvents/MyEvents"));
const ExploreEvents = React.lazy(() =>
  import("./components/exploreEvents/ExploreEvents")
);

// Axios
import axios from "axios";
import DetailView from "./components/exploreEvents/DetailView";

// Base
axios.defaults.baseURL = "http://localhost:5000/";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<div> Please Wait... </div>}>
                <Homemain />
              </Suspense>
            }
          />
          <Route
            path="/myevents/*"
            element={
              <Suspense fallback={<div> Please Wait... </div>}>
                <MyEvents />
              </Suspense>
            }
          />
          <Route
            path="/signup"
            element={
              <Suspense fallback={<div> Please Wait... </div>}>
                <Signup />
              </Suspense>
            }
          />
          <Route
            path="/login"
            element={
              <Suspense fallback={<div> Please Wait... </div>}>
                <Login />
              </Suspense>
            }
          />
          <Route
            path="/detailview/:id"
            element={
              <Suspense fallback={<div> Please Wait... </div>}>
                <DetailView />
              </Suspense>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
