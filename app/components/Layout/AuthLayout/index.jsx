import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const AuthLayout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    return navigate("/factions", { replace: true });
  }, []);

  return <Outlet />;
};

export default AuthLayout;
