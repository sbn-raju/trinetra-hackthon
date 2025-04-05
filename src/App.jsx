import React, { useState } from "react";
import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Loader from "./components/Loader";
import LostForm from "./pages/student/LostForm";
import RaisePetation from "./pages/main/RaisePetition";
import ClaimForm from "./pages/student/ClaimForm";
import VerificationForm from "./pages/VerificationForm";

// Lazy-loaded components
const LoginPage = lazy(() => import("./pages/auth/Login"));
const Register = lazy(() => import("./pages/auth/Register"));
const DashboardLayout = lazy(() => import("./layouts/DashboardLayout"));

const Main = lazy(() => import("./pages/Main"));



const Founditems=lazy(()=> import("./pages/Founditems"));
const Lostitems=lazy(()=> import("./pages/Lostitems"));

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


          <Route
            path="/"
            element={
              <DashboardLayout />
            }
          >
            <Route path="/raise-petation" element={<RaisePetation/>}/>
            <Route path="/lost-form" element={<LostForm/>}/>

            <Route path="/claim-form" element={<ClaimForm/>}/>

            <Route path="/verify-item" element={<VerificationForm/>}/>
          </Route>



          <Route path="/main" element={<Main />}/>


           <Route path='/founditems' element={<Founditems/>}/>
           <Route path='/lostitems' element={<Lostitems/>}/>


          </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
