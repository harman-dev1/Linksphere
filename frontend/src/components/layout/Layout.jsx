import Navbar from "./Navbar";
import React from "react";
import { useQuery } from "@tanstack/react-query";
const Layout = ({children}) => {
  
  return(
    <div className = 'min-h-screen bg-base-100'>
    <Navbar />
    <main className="max-w-7xl mx-auto px-4 py-6">{children}</main>
    </div>
  ); 
};

export default Layout;