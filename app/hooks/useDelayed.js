import React, { useEffect, useRef, useState } from "react";

const useDelayed = (callback, ms) => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    if (!callbackRef.current) return "no callback defined";
    const timer = setTimeout(() => {
      callbackRef.current && callbackRef.current();
      clearTimeout(timer);
    }, ms);

    return () => {
      clearTimeout(timer);
    };
  }, [ms, callbackRef.current]);
};

export default useDelayed;
