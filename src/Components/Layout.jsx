import React from "react";
import { SpeedDialWithTextOutside } from "./ui/SpeedDial";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen flex  flex-col ">
      <SpeedDialWithTextOutside />
      <Navbar />
      <div className="-z-10 fixed w-screen h-screen"  style={{
          backgroundImage: "linear-gradient(black 60%, #B30049 180%)",
        }} ></div>
      <main
        className="flex-1 "
       
      >
        {" "}
        {/* Ensure the main content can scroll */}
        {children}
      </main>
   
    </div>
  );
};

export default Layout;
