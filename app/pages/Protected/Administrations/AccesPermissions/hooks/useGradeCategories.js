import React, { useEffect, useState } from "react";
import { fetchGradesCategoriesByFaction } from "../Tabs/TabsContent/helper";

const useGradeCategories = (faction) => {
  const [state, setState] = useState({
    data: [],
    status: "pending",
    error: "",
  });

  const fetchData = async (signal) => {
    const res = await fetchGradesCategoriesByFaction(faction, signal);
    setState(
      (current) =>
        (current = { ...current, data: res.data, status: "fulfilled" })
    );
  };

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetchData(signal);
    console.log(faction);
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

export default useGradeCategories;
