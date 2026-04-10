import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import AppLayout from "./components/Global/AppLayout";
import LandingPage from "./pages/LandingPage";
import Signup from "./pages/Signup";
import { AppProvider } from "./contexts/AppContext";
import Dashboard from "./pages/Dashboard/Dashboard";
import Message from "./pages/Dashboard/Message";
import File from "./pages/Dashboard/File";
import { SettingsPage } from "./pages/Dashboard/Settings";
import Mo from "./pages/Dashboard/Mo";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
      cacheTime: 2 * 60 * 1000, // 2 minutes
    },
  },
});
gi;
function App() {
  return (
    <AppProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LandingPage />} /> {/* FIX */}
            <Route path='landing' element={<LandingPage />} />
            <Route element={<AppLayout />}>
              <Route path='dashboard' element={<Dashboard />} />
              <Route path='mo' element={<Mo />} />
              {/* <Route path="/tasks" element={<Tasks />} /> */}
              <Route path='/message' element={<Message />} />
              <Route path='/file' element={<File />} />
              <Route path='/settings' element={<SettingsPage />} />
            </Route>
            {/* <Route element={<AppLayout />}>
          <Route path='home' element={<Home />} />
          
          <Route path="dashboard" element={<Dashboard/>}/>
        </Route> */}
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />
          </Routes>
        </BrowserRouter>

        <ToastContainer
          position='top-center'
          autoClose={3000}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable
          pauseOnHover
        />
      </QueryClientProvider>
    </AppProvider>
  );
}

export default App;
