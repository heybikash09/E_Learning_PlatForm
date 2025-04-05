import React from "react";
import { useAuthStore } from "../contentStore/authStore";
import LandingPage from "../LandingPage/LandingPage";
import Profile from "../StudentPages/Profile";
function Home() {
  const { user } = useAuthStore();
 
  console.log('user-->',user)
  return !user ? (
    <LandingPage />
  ) : (
    <>
    <Profile/>
    </>
  );
}
export default Home;
