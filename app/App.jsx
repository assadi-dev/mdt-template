import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routing } from "./routes/routes";
import { Provider as ReduxProvider } from "react-redux";
import store from "./features/Store";
import { setupListeners } from "@reduxjs/toolkit/query";

const App = () => {
  const router = createBrowserRouter(routing);
  setupListeners(store.dispatch);
  return (
    <>
      <ReduxProvider store={store}>
        <RouterProvider router={router} />
      </ReduxProvider>
    </>
  );
};

export default App;
