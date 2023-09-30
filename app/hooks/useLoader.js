import React, { useState } from "react";

const useLoader = () => {
  const [loaderState, setLoaderState] = useState(true);

  const endLoader = () => setLoaderState((prevState) => (prevState = false));
  const startLoader = () => setLoaderState((prevState) => (prevState = true));
  const toggleLoader = () =>
    setLoaderState((prevState) => (prevState = !prevState));

  return {
    endLoader,
    loaderState,
    startLoader,
    toggleLoader,
  };
};

export default useLoader;
