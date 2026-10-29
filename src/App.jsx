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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
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
            <Route path="job/:company/:id" element={<Job />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
