import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Jobs from "./pages/Jobs";
import Job from "./pages/Job";
import Bookmarks from "./pages/Bookmarks";
import Applications from "./pages/Applications";
import Dashboard from "./pages/Dashboard";
import AppLayout from "./ui/AppLayout";
import JobLayout from "./ui/JobLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to="/home" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<JobLayout />}>
          <Route path="/home" element={<Jobs />} />
        </Route>
        <Route element={<AppLayout />}>
          {/* <Route index element={<Navigate to="/home" replace />} /> */}
          <Route path="job" element={<Job />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
