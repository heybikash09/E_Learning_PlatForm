import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import { Layout } from './Pages/Reports.jsx';
// import { Dashboard } from './VendorPage/Dashboard';
// import { Products } from './VendorPage/Products';
import Signup from "./Authentication/Signup";
import { Loader, Menu } from "lucide-react";
import Login from "./Authentication/Login";
import { useAuthStore } from "./contentStore/authStore.js";
import Profile from "./StudentPages/Profile.jsx";
import Dashboard from "./StudentPages/Dashboard.jsx";
import Lecture from "./StudentPages/Lecture.jsx";
import Enrollment from "./StudentPages/Enrollment.jsx";
import FeedbackForm from "./StudentPages/Feedback.jsx";
import OnlineQuiz from "./StudentPages/OnlineQuize.jsx";
import QuizQna from "./StudentPages/QuizQna.jsx";
import Home from "./Home/Home.jsx";
import Landing from "./LandingPage/LandingPage.jsx";
// import { useProductStore } from './contentStore/productStore.js';

function App() {
  const { user, isChekingAuth, authCheck } = useAuthStore();
  useEffect(() => {
    authCheck();
    console.log(user)
  }, [authCheck]);
  if (isChekingAuth) {
    return (
      <div className="h-screen">
        <div className="flex justify-center items-center bg-black h-full">
          <Loader className="animate-spin text-red-600 size-10" />
        </div>
      </div>
    );
  }
  // console.log(user)
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/signup/:role"
          element={!user ? <Signup /> : <Navigate to={`/`} />}
        />
        <Route
          path="/signin/:role"
          element={!user ? <Login /> : <Navigate to={`/`} />}
        />
        <Route path="/" element={<Profile />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="lecture" element={<Lecture />} />
          <Route path="enrollment" element={<Enrollment />} />
          <Route path="onlinequiz" element={<OnlineQuiz />} />
          <Route path="feedback" element={<FeedbackForm />} />
        </Route>
        <Route path="/quizqna" element={<QuizQna />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
