import PublicLayout from "./Layouts/PublicLayout/PublicLayout";
import LandingPage from "./pages/LandingPage/LandingPage";
import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { supabase } from "./supabaseClient";
import { checkSession } from "./store/authSlice";
import AuthPage from "./pages/AuthPage/AuthPage";
import MainLayout from "./Layouts/MainLayout/MainLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="auth" element={<AuthPage />} />
      </Route>
      <Route path="mainpage" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
