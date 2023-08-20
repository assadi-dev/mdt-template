import React, { useEffect, useState } from "react";

const useGradeCategoriesOptions = (faction) => {
  const [state, setState] = useState({
    data: [],
    status: "pending",
    error: "",
  });

  const fetchCategories = async (signal) => {
    const res = await Api.get(`/grades_categories/list/${faction}`, { signal });
    try {
      if (res.data) {
        setState(
          (current) =>
            (current = {
              ...current,
              data: res.data,
              error: "",
              status: "fulfilled",
            })
        );
      }
    } catch (error) {
      setState(
        (current) =>
          (current = {
            ...current,
            data: [],
            error: error.message,
            status: "rejected",
          })
      );
    }
  };

  useEffect(() => {
    if (!faction) return;
    const controller = new AbortController();
    const signal = controller.signal;
    fetchCategories(signal);

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

export default useGradeCategoriesOptions;
