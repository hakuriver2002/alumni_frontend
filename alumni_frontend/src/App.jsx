import "./App.css";
// Libary
import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/authContext";
import { useEffect } from "react";
// Auth Page
import Login from "./pages/authPage/Login/Login";
import Signup from "./pages/authPage/Signup/Signup";
// Guest Page
import HomePage from "./pages/GuestPage/Home/HomePage";
import EventPage from "./pages/GuestPage/EventPage/EventPage";
import NewsPage from "./pages/GuestPage/NewsPage/NewsPage";
import JobPage from "./pages/GuestPage/Job/JobPage"
// Admin Page
import Job from "./pages/AdminPage/Job/Job";
import Layout from "./pages/AdminPage/Layout";
import Alumni from "./pages/AdminPage/Alumni/Alumni";
import Event from "./pages/AdminPage/Event/Event";
import Dashboard from "./pages/AdminPage/Dashboard/Dashboard";
import News from "./pages/AdminPage/News/News";

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
          element={<NewsPage />}
        />
        <Route
          path="/jobs"
          element={<JobPage />}
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
          {/* Social */}
          <Route
            path=""
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
          <Route
            path="/admin/news"
            element={<News />}
          />
          <Route
            path="/admin/job"
            element={<Job />}
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
