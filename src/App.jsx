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
import JobsLayout from "./ui/JobsLayout";
import GuestRoute from "./ui/GuestRoute";
import Profile from "./pages/Profile";
import { Toaster } from "react-hot-toast";
import JobLayout from "./ui/JobLayout";
import AuthSyncher from "./features/Auth/AuthSyncher";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <AuthSyncher />
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
          <Route element={<JobsLayout />}>
            <Route path="/home" element={<Jobs />} />
          </Route>
          <Route element={<JobLayout />}>
            {/* <Route index element={<Navigate to="/home" replace />} /> */}
            <Route path="job/:company/:id" element={<Job />} />
          </Route>
          <Route
            element={
              <AuthenticatedRoute>
                <AppLayout />
              </AuthenticatedRoute>
            }
          >
            <Route path="/bookmarks" element={<Bookmarks />} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster position="top-center" gutter={8} />
    </QueryClientProvider>
  );
}

export default App;
