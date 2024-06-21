import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import HomePage from "./pages/Home/HomePage";
import EventPage from "./pages/EventPage/EventPage";
import News from "./pages/NewPage/NewPage";
import Job from "./pages/Job/Job";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/authContext";
import Layout from "./pages/AdminPage/Layout";
import Alumni from "./pages/AdminPage/Alumni/Alumni";
import Event from "./pages/AdminPage/Event/Event";
import { useEffect } from "react";
import Dashboard from "./pages/AdminPage/Dashboard/Dashboard";

function App() {
  const { authUser } = useAuthContext();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
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
          element={<EventPage />}
        />
        <Route
          path="/news"
          element={<News />}
        />
        <Route
          path="/jobs"
          element={<Job />}
        />

        {/* Auth Alumni*/}

        <Route
          path="/login"
          element={authUser ? <Navigate to="/social" /> : <Login />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <Signup />}
        />

        {/* Auth Manager */}
        <Route
          path="/admin"
          element={<Layout />}
        />
        {/* dashboard  */}
        <Route
          path="/admin/dashboard"
          element={<Dashboard />}
        />
        <Route
          path="/admin/alumni"
          element={<Alumni />}
        />
        <Route
          path="/admin/event"
          element={<Event />}
        />

        {/* pages  */}
        {/* <Route path="/orders" element={<Orders />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/customers" element={<Customers />} /> */}

        {/* apps  */}
        {/* <Route path="/kanban" element={<Kanban />} />
        <Route path="/editor" element={<Editor />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/color-picker" element={<ColorPicker />} /> */}

        {/* charts  */}
        {/* <Route path="/line" element={<Line />} />
        <Route path="/area" element={<Area />} />
        <Route path="/bar" element={<Bar />} />
        <Route path="/pie" element={<Pie />} />
        <Route path="/financial" element={<Financial />} />
        <Route path="/color-mapping" element={<ColorMapping />} />
        <Route path="/pyramid" element={<Pyramid />} />
        <Route path="/stacked" element={<Stacked />} /> */}
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
