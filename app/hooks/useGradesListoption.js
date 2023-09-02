import React, { useEffect, useState } from "react";
import { fetchGradesByFaction } from "./ApiCall";

const useGradesListoption = (faction) => {
  const [state, setState] = useState({
    data: [],
    status: "pending",
    error: "",
  });

  const fetchData = async (signal) => {
    const res = await fetchGradesByFaction(faction, signal);
    setState(
      (current) =>
        (current = { ...current, data: res.data, status: "fullfilled" })
    );
  };

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetchData(signal);
    return () => {
      controller.abort();
    };
  }, [faction]);

  return {
    data: state.data,
    status: state.status,
    error: state.error,
  };
};

export default useGradesListoption;
