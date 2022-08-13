import React from "react";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <Footer />
      <div>{children}</div>
    </>
  );
}
