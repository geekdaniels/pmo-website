import React from "react";
import Footer from "./footer";

import Navbar from "../layout/navbar";


import Navbar from "../layout/navbar";


export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
      
    </>
  );
}
