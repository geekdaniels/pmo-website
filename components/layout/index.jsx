import React from "react";
import Booking from './booking'

export default function Layout({ children }) {
  return (
    <>
      <Booking />
      <div>{children}</div>
    </>
  );
}
