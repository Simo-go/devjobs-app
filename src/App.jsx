import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import AuthLayout from "./features/Auth/AuthLayout";
import Applications from "./pages/Applications";
import Bookmarks from "./pages/Bookmarks";
import Confirmation from "./pages/Confirmation";
import Dashboard from "./pages/Dashboard";
import Job from "./pages/Job";
import Jobs from "./pages/Jobs";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AppLayout from "./ui/AppLayout";
import AuthenticatedRoute from "./ui/AuthenticatedRoute";
import JobLayout from "./ui/JobLayout";
import GuestRoute from "./ui/GuestRoute";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate to="/home" replace />} />
          <Route
            element={
              <GuestRoute>
                <AuthLayout />
              </GuestRoute>
            }
          >
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/confirm-account" element={<Confirmation />} />
          </Route>
          <Route element={<JobLayout />}>
            <Route path="/home" element={<Jobs />} />
          </Route>
          <Route element={<AppLayout />}>
            {/* <Route index element={<Navigate to="/home" replace />} /> */}
            <Route path="job/:company/:id" element={<Job />} />
            <Route element={<AuthenticatedRoute />}>
              <Route path="/bookmarks" element={<Bookmarks />} />
              <Route path="/applications" element={<Applications />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
