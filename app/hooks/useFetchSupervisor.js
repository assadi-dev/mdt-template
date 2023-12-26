import React, { useEffect, useRef, useState } from "react";
import Api from "../services/api/instance";
/**
 * Hooks qui retourne la liste des agents ayant le grade de la categorie superviseur et +
 * @param {array} categories doit contenir un tableau de categories
 */
const useFetchSupervisor = (categories) => {
  const [state, setState] = useState({ data: [], isLoading: true, error: "" });
  const abortControllerRef = useRef(new AbortController());

  const fetchData = async () => {
    try {
      const res = await Api.post(
        `/agent/grades/categories`,
        { categories },
        {
          signal: abortControllerRef.current?.signal,
        }
      );

      setState((prevState) => ({
        ...prevState,
        data: res.data,
      }));
    } catch (error) {
      let message = error.message;

      if (error.response?.data) {
        message = error.response.data?.message || error.message;
      }
      setState((prevState) => ({
        ...prevState,
        error: message,
      }));
    } finally {
      setState((prevState) => ({
        ...prevState,
        isLoading: false,
      }));
    }
  };

  useEffect(() => {
    if (!categories || categories.length == 0) return state;

    fetchData();

    return () => {
      abortControllerRef.current?.abort();
    };
  }, [categories]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    error: state.error,
  };
};

export default useFetchSupervisor;
