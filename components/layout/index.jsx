import React from "react";
import Navbar from "../layout/navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
}
