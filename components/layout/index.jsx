import React from "react";
import Footer from "./footer";

import Navbar from "../layout/navbar";

export default function Layout({ children }) {
  return (
    <>
      <div className="bg-white">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </div>
    </>
  );
}
