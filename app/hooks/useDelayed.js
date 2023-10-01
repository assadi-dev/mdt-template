import React, { useEffect, useRef, useState } from "react";

const useDelayed = (callback, ms) => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    if (!callbackRef.current) return "no callback defined";
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!ms) return "no time defined";

    const timer = setTimeout(() => {
      callbackRef.current();
    }, ms);

    return () => {
      clearTimeout(timer);
    };
  }, [ms]);
};

export default useDelayed;
