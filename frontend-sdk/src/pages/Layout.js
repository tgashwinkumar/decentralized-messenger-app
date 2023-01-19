import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

const Layout = () => {
  const [profileImage, setProfileImage] = useState(
    "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
  );

  return (
    <main className="h-screen w-screen overflow-hidden bg-[#F8F8F9] flex py-8">
      <Navbar profileImage={profileImage} />
      <div className="w-full h-full">
        <Outlet />
      </div>
    </main>
  );
};
export default Layout;
