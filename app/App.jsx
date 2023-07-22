import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routing } from "./routes/routes";

const App = () => {
  const router = createBrowserRouter(routing);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
