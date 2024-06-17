import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import HomePage from "./pages/Home/HomePage";
import Event from "./pages/EventPage/EventPage"
import News from "./pages/NewPage/NewPage";
import Job from "./pages/Job/Job";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/authContext";
import RootLayout from "./pages/RootLayout";
import Dashboard from "./pages/AdminPage/Dashboard/Dashboard";

function App() {
  const {authUser} = useAuthContext();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <div className="w-auto">
      <Routes>
        {/* Not Auth */}
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/events"
          element={<Event/>}
        />
        <Route
          path="/news"
          element={<News/>}
        />
        <Route
          path="/jobs"
          element={<Job/>}
        />

        {/* Auth Alumni*/}
        <Route
          path="/social"
          element={<RootLayout/>}
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to='/social' />: <Login/>}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to='/' />: <Signup />}
        />

        {/* Auth Manager */}
        <Route
          path="/admin"
          element={<Dashboard/>}
        />

      </Routes>
      <Toaster/>
    </div>
  );
}

export default App;
