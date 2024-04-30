import React from "react";
import { Outlet } from "react-router-dom";

const RootLayout: React.FC = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default RootLayout;
