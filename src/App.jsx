import React, { useState } from "react";
import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Loader from "./components/Loader";

// Lazy-loaded components
const LoginPage = lazy(() => import("./pages/auth/Login"));
const Register = lazy(() => import("./pages/auth/Register"));


// const Profile = lazy(() => import("./Profile"));/

const App = () => {
  
  //Getting the user role from the session Storage.
  const role = sessionStorage.getItem("userRole");


  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/login" element={<LoginPage />} />

          <Route path="/register" element={<Register />} />

          </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
