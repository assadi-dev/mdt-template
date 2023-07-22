import React from "react";
import { Outlet } from "react-router-dom";

const ThemeLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default ThemeLayout;
