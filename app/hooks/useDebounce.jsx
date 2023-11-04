import React, { useEffect, useRef, useState } from "react";

const useDebounce = (value, timeout) => {
  const callback = useRef(callback);
  const [debouncedValue, setDebouncedValue] = useState("");
  const timerRef = useRef();

  useEffect(() => {
    timerRef.current = setTimeout(() => setDebouncedValue(value), timeout);

    return () => {
      clearTimeout(timerRef.current);
    };
  }, [value, timeout]);

  return {
    debouncedValue,
  };
};

export default useDebounce;
