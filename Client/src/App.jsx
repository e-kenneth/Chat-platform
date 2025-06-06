import Navbar from "./components/Navbar.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import SettingsPage from "./pages/SettingsPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import { useEffect } from "react";
import { axiosInstance } from "./lib/axios.js";
import { useAuthStore } from "./store/useAuthStore.js";
import { Loader } from "lucide-react";
const App = () => {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore()

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  console.log({ authUser });

  if (isCheckingAuth && !authUser){
    return (
    <div className = "flex items-center justify-center h-screen" >
    <Loader className="size-10 animate-spin" />
    </div >
  );
  }
return (
  <div>
    <Navbar />


    <Routes>
      <Route path="/" element={authUser ? <HomePage /> : <Navigate to="/login" />}></Route>
      <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to="/" />}></Route>
      <Route path="/login" element={!authUser ? <LoginPage />: <Navigate to="/"/>}></Route>
      <Route path="/settings" element={<SettingsPage />}></Route>
      <Route path="/profile" element={authUser ?<ProfilePage /> : <Navigate to="/login" />}></Route>
    </Routes>
  </div>
);
};

export default App;