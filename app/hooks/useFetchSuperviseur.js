import React, { useEffect, useRef, useState } from "react";
import Api from "../services/api/instance";
/**
 * Hooks qui retourne la liste des agents ayant le grade de la categorie superviseur et +
 * @param {array} categories doit contenir un tableau de categories
 */
const useFetchSuperviseur = (categories) => {
  const [state, setState] = useState({ data, isLoading: true, error: "" });
  const abortControllerRef = useRef(new AbortController());

  const fetchData = async () => {
    return Api.post(`/agent/grades/categories`, categories, {
      signal: abortControllerRef.current?.signal,
    });
  };

  useEffect(() => {
    if (!categories || categories.length == 0) return state;

    fetchData();

    return () => {
      abortControllerRef.current?.abort();
    };
  }, [categories]);
};

export default useFetchSuperviseur;
